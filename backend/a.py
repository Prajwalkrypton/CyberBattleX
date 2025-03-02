import bcrypt

hashed_password = b"$2b$12$Xqjz6wogwIh5GHJ3.q2C4uPeApMQJzqpLgqSLMmEzWflpdJHH1Wqu"
password_to_check = ["Password123!", "SecurePass456$", "mypassword", "test123"]
 # Try different passwords

for password in password_to_check:
    if bcrypt.checkpw(password.encode(), hashed_password):
        print(f"✅ The password is: {password_to_check}")
else:
    print("❌ Incorrect password")
