
## ▶️ Lancer le projet

1. **Démarrer Kafka & Zookeeper**

2. **Démarrer MongoDB**

3. **Lancer les scripts dans 3 terminaux séparés :**
   ```bash
   node producer.js   # envoie des messages chaque seconde
   node consumer.js   # lit les messages et les stocke
   node server.js     # expose GET /messages

   
4. Tester Postman :  GET http://localhost:3000/messages 
   
📸 Captures

📌 MongoDB : ![Capture MongoDB](https://github.com/user-attachments/assets/976ec010-c3a0-41db-8471-3775c326ead0)


📌 API via Postman : ![Capture Postman](https://github.com/user-attachments/assets/6add07a6-1ed5-4ce6-82d2-d3ec2fac20d8)
