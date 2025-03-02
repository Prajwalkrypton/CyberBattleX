# from flask import Flask, request, jsonify
# import bcrypt
# import jwt
# import os
# import datetime
# from dotenv import load_dotenv
# from supabase import create_client
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}},supports_credentials=True)


# load_dotenv()
# SUPABASE_URL = os.getenv("SUPABASE_URL")
# SUPABASE_KEY = os.getenv("SUPABASE_KEY")
# supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
# SECRET_KEY = os.getenv("SECRET_KEY")
# @app.route('/signup', methods=['POST'])
# def signup():
#     data = request.json
#     username = data.get('username')
#     email = data.get('email')
#     password = data.get('password')


#     response = supabase.table("users").select("*").eq("email", email).execute()
#     if response.data:
#         return jsonify({"error": "Email already registered"}), 400

    
#     hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

   
#     user_data = {
#         "username": username,
#         "email": email,
#         "password_hash": hashed_password
#     }
#     supabase.table("users").insert(user_data).execute()

#     return jsonify({"message": "User registered successfully"}), 201

# # Login Route
# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json
#     email = data.get('email')
#     password = data.get('password')

#     # Fetch user from Supabase
#     response = supabase.table("users").select("*").eq("email", email).execute()
#     if not response.data:
#         return jsonify({"error": "Invalid email or password"}), 401

#     user = response.data[0]
#     stored_password = user["password_hash"]

#     # Verify password
#     if not bcrypt.checkpw(password.encode('utf-8'), stored_password.encode('utf-8')):
#         return jsonify({"error": "Invalid email or password"}), 401

#     # Generate JWT Token
#     token = jwt.encode({"user_id": user["id"], "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, SECRET_KEY, algorithm="HS256")

#     return jsonify({"message": "Login successful", "token": token}), 200


# # 3️⃣ Fetch User Data
# @app.route('/user/<user_id>', methods=['GET'])
# def get_user(user_id):
#     response = supabase.table("users").select("*").eq("id", user_id).execute()
#     return jsonify(response["data"][0]) if response["data"] else jsonify({"error": "User not found"}), 404

# # 4️⃣ Update XP & Level
# @app.route('/update_xp', methods=['POST'])
# def update_xp():
#     data = request.json
#     user_id, xp_gain = data["user_id"], data["xp_gain"]

#     user = supabase.table("users").select("xp", "level").eq("id", user_id).execute()["data"][0]
#     new_xp = user["xp"] + xp_gain

#     # Level-up logic (Example: Level up every 100 XP)
#     new_level = user["level"]
#     if new_xp >= new_level * 100:
#         new_level += 1

#     supabase.table("users").update({"xp": new_xp, "level": new_level}).eq("id", user_id).execute()
    
#     return jsonify({"message": "XP Updated", "new_xp": new_xp, "new_level": new_level})

# if __name__ == '__main__':
#     app.run(debug=True)
from flask import Flask, request, jsonify
import bcrypt
import jwt
import os
import datetime
from dotenv import load_dotenv
from supabase import create_client
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

load_dotenv()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
SECRET_KEY = os.getenv("SECRET_KEY")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# ✅ Signup Route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if email is already registered
    response = supabase.table("users").select("*").eq("email", email).execute()
    if response.data:
        return jsonify({"error": "Email already registered"}), 400

    # Hash password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    # Insert user
    user_data = {
        "username": username,
        "email": email,
        "password_hash": hashed_password,
        "xp": 0,
        "level": 1
    }
    supabase.table("users").insert(user_data).execute()

    return jsonify({"message": "User registered successfully"}), 201

# ✅ Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Fetch user from Supabase
    response = supabase.table("users").select("*").eq("email", email).execute()
    users = response.data  # Get user data from response

    if not users:
        return jsonify({"error": "Invalid email or password"}), 401

    user = users[0]  # Take first user (if multiple)
    stored_password = user["password_hash"]

    # Verify password
    if not bcrypt.checkpw(password.encode('utf-8'), stored_password.encode('utf-8')):
        return jsonify({"error": "Invalid email or password"}), 401

    # Generate JWT Token
    token = jwt.encode(
        {"user_id": user["id"], "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
        SECRET_KEY,
        algorithm="HS256"
    )

    return jsonify({
        "message": "Login successful",
        "token": token,
        "username": user["username"],
        "level": user["level"],
        "xp": user["xp"]
    }), 200

# ✅ Authenticated User Route (For AfterLogin Page)
@app.route('/me', methods=['GET'])
def get_current_user():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({"error": "Unauthorized"}), 401

    try:
        token = auth_header.split(" ")[1]  # Extract token from "Bearer <token>"
        decoded_token = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        user_id = decoded_token["user_id"]

        # Fetch user from Supabase
        response = supabase.table("users").select("id, username, email, xp, level").eq("id", user_id).execute()
        users = response.data

        if not users:
            return jsonify({"error": "User not found"}), 404

        return jsonify(users[0]), 200

    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expired"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"error": "Invalid token"}), 401

# ✅ Update XP & Level
@app.route('/update_xp', methods=['POST'])
def update_xp():
    data = request.json
    user_id = data["user_id"]
    xp_gain = data["xp_gain"]

    # Fetch user details
    response = supabase.table("users").select("xp", "level").eq("id", user_id).execute()
    users = response.data

    if not users:
        return jsonify({"error": "User not found"}), 404

    user = users[0]
    new_xp = user["xp"] + xp_gain

    # Level-up logic (Example: Level up every 100 XP)
    new_level = user["level"]
    if new_xp >= new_level * 100:
        new_level += 1

    # Update XP & Level in Supabase
    supabase.table("users").update({"xp": new_xp, "level": new_level}).eq("id", user_id).execute()

    return jsonify({"message": "XP Updated", "new_xp": new_xp, "new_level": new_level})

if __name__ == '__main__':
    app.run(debug=True)
