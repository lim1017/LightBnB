INSERT INTO users (name, email, password) 
VALUES ('Tom', 'lim@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Bob', 'bob@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Super', 'super@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Joe', 'Joe@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),
('Blob', 'blob@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');


INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES(1, 'Capsule Room', 'A Capsule Room', 'https://tinyurl.com/rnspatx' , 'https://tinyurl.com/rnspatx', 400, 1, 1, 1, 'Japan', 'Japan Street', 'Japan City', 'Japan Province', 'JAPAN1', TRUE),
(1, 'Barn', 'A Barn', 'https://tinyurl.com/rfph7g3' , 'https://tinyurl.com/rfph7g3', 350, 10, 3, 5, 'Canada', 'Canada Street', 'Canada City', 'Canada Province', 'CAN1', TRUE),
(1, 'Castle', 'A Castle', 'https://tinyurl.com/tte89wl' , 'https://tinyurl.com/tte89wl', 2500, 30, 15, 25, 'England', 'England Street', 'England City', 'England Province', 'ENGLAND1', TRUE);


INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES('2001-05-11','2001-05-15', 1, 3),
('2011-09-11','2011-09-15', 3, 2),
('2016-06-21','2016-06-25', 2, 4),
('2008-02-11','2008-02-15', 3, 3),
('2004-09-12','2004-09-15', 1, 5);


INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES(3,1,1,5,'AMAZING'),
(2,3,2,5,'AMAZING!'),
(4,2,3,5,'AMAZING!!'),
(3,3,4,5,'AMAZING!!!'),
(5,1,5,5,'AMAZING!!!!');