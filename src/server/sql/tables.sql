CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    userData JSON NOT NULL,
    billData JSON NOT NULL,
    tourData JSON NOT NULL,
    scoreData JSON NOT NULL,
    socialData JSON NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;