-- MySQL dump 10.11
--
-- Host: localhost    Database: mei_tuan
-- ------------------------------------------------------
-- Server version	5.0.87-community-nt

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `goods`
--

DROP TABLE IF EXISTS `goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `goods` (
  `img` varchar(255) default NULL,
  `title` varchar(255) default NULL,
  `aimmoney` int(255) default NULL,
  `havemoney` int(255) default NULL,
  `num` int(11) default NULL,
  `gid` int(11) NOT NULL auto_increment,
  PRIMARY KEY  (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goods`
--

LOCK TABLES `goods` WRITE;
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES ('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65bCB6Z2i5Zu-54mHMV_lia_mnKwucG5nOjIwMTgwNjI3MTQ0NzQxOjVqRHhpejBT@220w','\r\n博爱家园∙安全社区 | 慈善募捐',20000000,6022270,21,1),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTExLmpwZWc6MjAxOTAyMDMyMDQ5MTM6S1NWeWJjQ0Q=@220w','贫困孤儿助养 | 慈善募捐',11123455,135813,14,2),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65aS05Zu-5pu05pawLmpwZWc6MjAxODA5MDUxOTAwNDM6OEllSkRlMGg=@220w','诺亚方舟留住家园 | 慈善募捐',49879760,26960135,41,3),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6YTU3YWQyZmM5NjM1MWFkOTAyZjE5YzBkMWMzNzc2Zi5qcGVnOjIwMjAwMTA5MTYyMzMzOkhmR2FYZjdX@220w','为藏区儿童捐一支画笔 | 慈善募捐',17430000,100000,12,4),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65bCB6Z2i5Zu-54mHMV_lia_mnKwucG5nOjIwMTgwNjI3MTQ0NzQxOjVqRHhpejBT@220w','山村幼儿园计划 | 慈善募捐',100000000,50000000,2,5),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTExLmpwZWc6MjAxOTAyMDMyMDQ5MTM6S1NWeWJjQ0Q=@220w','病患孤儿重获新生 | 慈善募捐',60000000,49000000,6,6),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65aS05Zu-5pu05pawLmpwZWc6MjAxODA5MDUxOTAwNDM6OEllSkRlMGg=@220w','壹基金净水计划 | 慈善募捐',30000000,18000000,3,7),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTExLmpwZWc6MjAxOTAyMDMyMDQ5MTM6S1NWeWJjQ0Q=@220w','空巢老人救助行动 | 慈善募捐',25520000,23380000,3,8),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65bCB6Z2i5Zu-54mHMV_lia_mnKwucG5nOjIwMTgwNjI3MTQ0NzQxOjVqRHhpejBT@220w','博爱家园∙安全社区 | 慈善募捐',27500000,5207488,22,9),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6UkFMXzgzOTkuanBlZzoyMDE5MDUyMzIyMTAxNDp0R3NCQUdPRg==@220w','兔唇宝宝的微笑 | 慈善募捐',50000000,42900000,12,10),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTExLmpwZWc6MjAxOTAyMDMyMDQ5MTM6S1NWeWJjQ0Q=@220w','病患孤儿重获新生 | 慈善募捐',110000000,90000000,1,11),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTExLmpwZWc6MjAxOTAyMDMyMDQ5MTM6S1NWeWJjQ0Q=@220w','为藏区儿童捐一支画笔 | 慈善募捐',60000000,23000000,10,12),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65bCB6Z2i5Zu-54mHMV_lia_mnKwucG5nOjIwMTgwNjI3MTQ0NzQxOjVqRHhpejBT@220w','壹基金净水计划 | 慈善募捐',60000000,49000000,399,13),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65bCB6Z2i5Zu-54mHMV_lia_mnKwucG5nOjIwMTgwNjI3MTQ0NzQxOjVqRHhpejBT@220w','病患孤儿重获新生 | 慈善募捐',17430000,10000000,27,14),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTExLmpwZWc6MjAxOTAyMDMyMDQ5MTM6S1NWeWJjQ0Q=@220w','壹基金净水计划 | 慈善募捐',30000000,9000000,37,15),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6YTU3YWQyZmM5NjM1MWFkOTAyZjE5YzBkMWMzNzc2Zi5qcGVnOjIwMjAwMTA5MTYyMzMzOkhmR2FYZjdX@220w','空巢老人救助行动 | 慈善募捐',25520000,15380000,22,16),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6YTU3YWQyZmM5NjM1MWFkOTAyZjE5YzBkMWMzNzc2Zi5qcGVnOjIwMjAwMTA5MTYyMzMzOkhmR2FYZjdX@220w','为藏区儿童捐一支画笔 | 慈善募捐',17430000,10000000,12,17),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65bCB6Z2i5Zu-54mHMV_lia_mnKwucG5nOjIwMTgwNjI3MTQ0NzQxOjVqRHhpejBT@220w','山村幼儿园计划 | 慈善募捐',100000000,50000000,2,18),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTExLmpwZWc6MjAxOTAyMDMyMDQ5MTM6S1NWeWJjQ0Q=@220w','病患孤儿重获新生 | 慈善募捐',60000000,49000000,6,19),('https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65aS05Zu-5pu05pawLmpwZWc6MjAxODA5MDUxOTAwNDM6OEllSkRlMGg=@220w','壹基金净水计划 | 慈善募捐',30000000,18000000,3,20);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hui`
--

DROP TABLE IF EXISTS `hui`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hui` (
  `title` varchar(255) default NULL,
  `img` varchar(255) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hui`
--

LOCK TABLES `hui` WRITE;
/*!40000 ALTER TABLE `hui` DISABLE KEYS */;
INSERT INTO `hui` VALUES ('天津市妇女儿童发展基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65qCHMjAwLmpwZzoyMDIwMDQzMDA5NDAyODpQSkJUcDhLUg=='),('北京屈正爱心基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65Z-66YeR5LyaTE9HTygyMDApLmpwZzoyMDIwMDMwMjEyMDAyODpQZmNPcVdDVQ=='),('北京春晖博爱儿童救助公益基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65Z-66YeR5LyaIGxvZ29f5Ymv5pysLnBuZzoyMDIwMDIyNzA5MDk1Mzp4VHBOaHRocA=='),('爱佑慈善基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6TE9HTzIwMC5qcGc6MjAyMDAyMTAxNjA3NDc6NHl5VHJPdHI='),('中国老龄事业发展基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65bCPTE9HTy5qcGc6MjAyMDAyMTAxNTAwNTY6ZlhjVk5CU1g='),('爱德基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65Lya5qCH5Ymv5pys5Ymv5pysYS5qcGc6MjAxOTEyMjcxMzM2MDk6OU5OcmNiUTc='),('广西壹方慈善基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MjAwLnBuZzoyMDE5MTIxOTE3MDUwMTpwUExZSmRMdQ=='),('河南省爱心助老基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6MTU3NjQ4MzIyNC5qcGc6MjAxOTEyMTYxNjM2MDU6aTBwMFNIU0s='),('安徽实践家文教慈善基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ6bG9nbyDlm77lg48uanBnOjIwMTkxMjA5MTczMjAyOkJCVG9DUG41'),('上海真爱梦想公益基金会','https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65Zu-54mHMV_lia_mnKwucG5nOjIwMTkxMDExMTA0NTA0OnFFVzVldWhu'),('undefined','undefined');
/*!40000 ALTER TABLE `hui` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userinfo` (
  `userphone` varchar(255) default NULL,
  `userimg` varchar(255) default NULL,
  `id` int(11) NOT NULL auto_increment,
  `pws` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES ('15397691769',NULL,4,'123'),('18290557301','http://localhost:7001/public/upload/90c1fd2b-f626-4504-9fec-856b1a0a53af.jpg',5,'123');
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userorder`
--

DROP TABLE IF EXISTS `userorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userorder` (
  `userphone` varchar(255) default NULL,
  `gid` int(11) default NULL,
  `money` int(11) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userorder`
--

LOCK TABLES `userorder` WRITE;
/*!40000 ALTER TABLE `userorder` DISABLE KEYS */;
INSERT INTO `userorder` VALUES ('yq',17,20),('1',2,10),('yq',17,30),('15397691769',1,1),('15397691769',1,11),('15397691769',1,111111),('15397691769',1,10),('18290557301',3,10),('18290557301',1,2222222);
/*!40000 ALTER TABLE `userorder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-17 10:57:03
