INSERT INTO users (first_name, last_name, email, password, role, date_added) VALUES ('Super','Mario', 'test', 'mario@nintendo.com', 'student', Now());
INSERT INTO users (first_name, last_name, email, password, role, date_added) VALUES ('Pooja','Thakkar', 'test', 'pooja@hotmail.com', 'student', Now());
INSERT INTO users (first_name, last_name, email, password, role, date_added) VALUES ('Nupur','Prakash', 'test', 'nupur@hotmail.com', 'author', Now());

INSERT INTO courses (title, description, price, thumbnail, content, user_id) VALUES ('Business Development','tasks and processes to develop and implement growth opportunities', 140.00, 'https://sportslearning.online/uploads/thumbnails/course_thumbnails/course_thumbnail_default_D2UzsVO1.jpg', 'Business development is the creation of long-term value for an organization from customers, markets, and relationships. Business development can be taken to mean any activity by either a small or large organization, non-profit or for-profit enterprise which serves the purpose of ‘developing’ the business in some way.', 2);
INSERT INTO courses (title, description, price, thumbnail, content, user_id) VALUES ('Industry Related Topic','work with other groups', 150.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCNqjbe_VTiOJm5MftW-uakD9ogOAQwnPwrw&usqp=CAU', 'Though it may seem like collaborating with competition is counterproductive, this strategy is a great way of increasing visibility. Additionally, this can help promote the popular sports to kids. Don’t be afraid to reach out to other teams to cross promote events or fundraisers.', 1);
INSERT INTO courses (title, description, price, thumbnail, content, user_id) VALUES ('Event Management','Turn your passion for planning into an exciting career.', 130.00, 'https://sportslearning.online/uploads/thumbnails/course_thumbnails/course_thumbnail_default_XJc1anVg.jpg', 'The Event Management program prepares you for many exciting roles in the fast-paced event planning industry. Gain the experience, knowledge and real-world practice needed to be successful in this high-demand field.', 3);

INSERT INTO enroll (user_id, course_id, date_added, last_modified) VALUES (2, 1, Now(), Now());
INSERT INTO enroll (user_id, course_id, date_added, last_modified) VALUES (1, 2, Now(), Now());
INSERT INTO enroll (user_id, course_id, date_added, last_modified) VALUES (3, 3, Now(), Now());

INSERT INTO comments (user_id, course_id, body, date_added) VALUES (2, 1, 'Great Experience', Now());
INSERT INTO comments (user_id, course_id, body, date_added) VALUES (1, 2, 'Wonderful learning', Now());
INSERT INTO comments (user_id, course_id, body, date_added) VALUES (3, 3, 'Useful information', Now());