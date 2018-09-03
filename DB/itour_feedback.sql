-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: itour
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `siteName` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `comment` text,
  `rating` int(11) DEFAULT NULL,
  `siteNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,'אגם ירוחם','טארק','מקום יפה ,נקי מתאים למשפחות מאוד ממלחץ',5,1),(2,'אגם ירוחם','אבי','אי אפשרות השחייה חבל',3,1),(3,'גן לאומי גן השלושה - הסחנה','זוהר','האתר יפה אבל יש בעיית נקיון לא מטופח',2,2),(4,'זוויתן תחתון ובריכת המשושים','איתמר','מקום נחמד לשחייה ,אבל לבילוי משפחתי ופיקנק לא כל כך ',3,3),(5,'יער שוויץ','אורן','תצפית נהדרת על כנרת עם אפשרות לשתות ולאכול מול הנוף המדהים',4,4),(6,'מעיין אלרואי ופארק העמקים','קרן','ממליץ על האתר סביבו טבע יפה',4,5),(7,'נחל אלכסנדר והצבים הרכים','אירית','המקום נהדר גם המסלול המקום חוויתי',5,6),(8,'נחל הבשור ופארק אשכול','Samer','nice site',5,7),(9,'נחל השופט','יוסי','שווה לבקר במקום',5,8),(10,'נחל השופט','דנה','מקום יפה',4,8),(11,'עין אום תינה','אורון','מקום יפה אבל יש חוסר נגישות לעגלות ונכים',3,9),(12,'ראש הנקרה','אלי','יופי של נוף ומקום ומזג אוויר',5,10),(13,'ראש הנקרה','דניאל','נהניתי מאוד מהמקום עם הילדים אחלה טיול',4,10),(14,'שפך נחל שורק וחוף פלמחים','עמיר','לא ממליץ מלא בוץ',1,11),(15,'שפך נחל שורק וחוף פלמחים','אדם','נהניתי מאוד מהמים והמקום לטיול חברים שווה',5,11),(18,'זוויתן תחתון ובריכת המשושים','amir','good site',4,3),(23,'זוויתן תחתון ובריכת המשושים','Tom','it was funtastic',5,3),(24,'שפך נחל שורק וחוף פלמחים','Adir','Not bad',3,11),(25,'שפך נחל שורק וחוף פלמחים','Adir','Not bad',3,11),(26,'יער שוויץ','yossi','great view',5,4),(27,'זוויתן תחתון ובריכת המשושים','tp','areq',3,3);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-20 20:56:41
