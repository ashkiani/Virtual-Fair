-- Insert into jobs table
Insert into virtual_fair_db.tbljobs (title, description, createdAt, updatedAt)
VALUES('Developer', 'Developing web applications', Now(), Now())

-- Insert into skills table
Insert into virtual_fair_db.tblskills (skill, createdAt, updatedAt)
Values('Software Development', Now(), Now())

-- Insert into job skills table
Insert into virtual_fair_db.tbljobsskills (createdAt, updatedAt, tblJobId, skill_id)
values (Now(), Now(), 1, 1)

-- Insert into actions table
Insert into virtual_fair_db.tblactions (action, createdAt, updatedAt)
Values ('Schedule Interview', Now(), Now()), 
('Offer Job', Now(), Now()),
('Interviewed', Now(), Now()), 
('Not Qualified', Now(), Now())