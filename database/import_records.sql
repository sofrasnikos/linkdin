USE web_dev_db

LOAD DATA LOCAL INFILE 'db_after_hash/user.csv' 
INTO TABLE user 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"' 
LINES TERMINATED BY "\n" 
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'db_after_hash/post.csv' 
INTO TABLE post 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"' 
LINES TERMINATED BY "\n" 
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'db_after_hash/post_comment.csv' 
INTO TABLE post_comment 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY "\n"
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'db_after_hash/post_interest.csv' 
INTO TABLE post_interest 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY "\n"
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'db_after_hash/chat.csv' 
INTO TABLE chat 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY "\n"
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'db_after_hash/chat_history.csv' 
INTO TABLE chat_history 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY "\n"
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'db_after_hash/user_network.csv' 
INTO TABLE user_network 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY "\n"
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE 'db_after_hash/notifications.csv' 
INTO TABLE notifications 
FIELDS TERMINATED BY ';' 
ENCLOSED BY '"'
LINES TERMINATED BY "\n"
IGNORE 1 LINES;