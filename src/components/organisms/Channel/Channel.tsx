import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import Messages from "../../molecules/Messages/Messages";
import PostColumn from "../../molecules/PostColumn/PostColumn";
import { Box } from "@material-ui/core";

interface ChannelProps {
  user: any;
  db: any;
}

const Channel: React.FC<ChannelProps> = ({ user, db }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, displayName, photoURL } = user;

  const taregetCollectionName  = "messages-test";

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection(taregetCollectionName)
        .orderBy("createdAt", "desc")
        .limit(25)
        .onSnapshot((querySnapshot: any) => {
          const data = querySnapshot.docs.map((doc: any) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setMessages(data);
        });

      return unsubscribe;
    }
  }, [db]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (db) {
      db.collection(taregetCollectionName).add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
      setNewMessage("");
    }
  };

  return (
    <>
      <Box mb={4}>
        <PostColumn
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
          value={newMessage}
        />
      </Box>

      <Messages messages={messages} user={user} />
    </>
  );
};

export default Channel;
