
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

📌 MongoDB (./screenshots/Capture MongoDB.png)

📌 API via Postman (./screenshots/Capture Postman.png)
