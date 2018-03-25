-- MySQL dump 10.13  Distrib 5.6.39, for Linux (x86_64)
--
-- Host: localhost    Database: Uptick
-- ------------------------------------------------------
-- Server version	5.6.39

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
-- Table structure for table `Make`
--

DROP TABLE IF EXISTS `Make`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Make` (
  `_AutoId` int(11) DEFAULT NULL,
  `Make` varchar(50) DEFAULT NULL,
  `Model` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Make`
--

LOCK TABLES `Make` WRITE;
/*!40000 ALTER TABLE `Make` DISABLE KEYS */;
INSERT INTO `Make` VALUES (1,'Jeep','Rubicon'),(2,'Jeep','Wrangler'),(3,'Jeep','Road Warrior'),(4,'Jeep','Road Rash'),(5,'Jeep','Road Kill');
/*!40000 ALTER TABLE `Make` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ModelToPart`
--

DROP TABLE IF EXISTS `ModelToPart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ModelToPart` (
  `_MakeId` int(11) DEFAULT NULL,
  `_PartId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ModelToPart`
--

LOCK TABLES `ModelToPart` WRITE;
/*!40000 ALTER TABLE `ModelToPart` DISABLE KEYS */;
INSERT INTO `ModelToPart` VALUES (1,1),(1,2),(1,3),(1,4),(2,1),(2,1),(2,2),(3,1),(3,2),(4,1),(4,1),(4,1),(5,1),(5,2),(5,3);
/*!40000 ALTER TABLE `ModelToPart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Parts`
--

DROP TABLE IF EXISTS `Parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Parts` (
  `_PartId` int(11) DEFAULT NULL,
  `PartNo` varchar(50) DEFAULT NULL,
  `PartDescription` varchar(50) DEFAULT NULL,
  `PartVer` varchar(50) DEFAULT NULL,
  `PartQty` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Parts`
--

LOCK TABLES `Parts` WRITE;
/*!40000 ALTER TABLE `Parts` DISABLE KEYS */;
INSERT INTO `Parts` VALUES (1,'NX-213190','Jeep Cog 1','1',100),(2,'BX-212234','Jeep Cog 2','1',1000),(3,'AX-213456','Jeep Cog 3','2',100),(4,'ZX-98767-AB','Jeep Sprocket 1','5',5000),(5,'ZZ-67541-AD','Jeep Sprocket 2','4',2500),(6,'BB-213456-1','Jeep Sprocket 3','2',2500);
/*!40000 ALTER TABLE `Parts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-25  7:56:18
