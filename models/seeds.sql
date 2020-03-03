INSERT INTO virtual_fair_db.actions SET action='reviewing',createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.actions SET action='reviewed',createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.actions SET action='approved',createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.actions SET action='rejected',createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.usertypes SET type='applicant',createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.usertypes SET type='admin',createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.users SET firstname='applicant_firstname',lastname='applicant_lastname',username='applicant1',password='password1',createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.users SET firstname='admin_firstname',lastname='admin_lastname',username='admin1',password='password2',createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.userstypes SET UserId=1,UserTypeId=1,createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.userstypes SET UserId=2,UserTypeId=2,createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.skills SET skill='JavaScript',createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.skills SET skill='HTML',createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.skills SET skill='CSS',createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.requirements SET requirement='bachelor degree',createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.locations SET location='Arlington',createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.jobs SET title='Web Developer',description='This a fron-end position',locationId=1 ,createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.jobskills SET jobId=1, skillId=1,createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.jobskills SET jobId=1, skillId=2,createdAt=now(),updatedAt=now();
INSERT INTO virtual_fair_db.jobskills SET jobId=1, skillId=3,createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.jobrequirements SET jobId=1, requirementId=1,createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.applications SET jobId=1, userId=1,note='Im very interested at this job.',createdAt=now(),updatedAt=now();

INSERT INTO virtual_fair_db.adminactions SET actionId=1,applicationId=1, userId=2,note='Seems like a very good candidate.',createdAt=now(),updatedAt=now();
