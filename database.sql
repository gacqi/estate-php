create database if not exists estate_db;
use estate_db;

create table if not exists user (
	uid int primary key auto_increment unique not null,
	username varchar(10) not null,
	password varchar(20) not null,
	phone int(11) not null,
	frozen bit not null default 0,
	user_type bit default 0 comment '用户的类型'
);

create table if not exists estate_info(
	eid int primary key auto_increment unique not null,
	uid int not null,
	title varchar(10) not null,
	area int not null,
	address varchar(10) not null,
	price double not null,
	info_type int not null comment '信息的类型',
	content varchar(255) not null,
	reliable bit not null default 1,
	create_time timestamp default now()
);

create table if not exists complain(
	complainant int not null comment '投诉者id',
	respondent int not null comment '被投诉者id',
	eid int not null comment '房产信息id'
);

create table if not exists message  (
	uid int not null comment '留言人id',
	eid int not null comment '被留言房产信息id',
	content varchar(255) not null comment '留言内容'
);
