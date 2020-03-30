create user 'schemeuser'@'%' identified by 'userscheme';
create user 'schemeuser'@'localhost' identified by 'userscheme';

grant all privileges on schememodels.* to 'schemeuser'@'%';
grant all privileges on schememodels.* to 'schemeuser'@'localhost';

create table if not exists schememodels.prestocreds (
    id bigint not null auto_increment,
    host varchar(256) not null default '',
    port bigint not null default '8080',
    `catalog` varchar(256) not null default '',
    `schema` varchar(256) not null default '',
    user varchar(256) not null default '',
    primary key (id)
);