-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 12, 2023 at 07:24 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeesdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` tinytext NOT NULL,
  `email` tinytext NOT NULL,
  `phone` tinytext NOT NULL,
  `birthdate` date NOT NULL,
  `montly` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `data_created` datetime NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `fullname`, `email`, `phone`, `birthdate`, `montly`, `data_created`, `deleted`) VALUES
(2, 'Milos Pantelic', 'misapantelic96@gmail.com', '+6543132894', '1985-09-21', '400', '2023-03-11 14:09:56', 1),
(3, 'Jovan Jovanovic', 'joca@smca.com', '+1234657897', '1996-04-26', '500', '2023-03-11 14:10:37', 1),
(4, 'Jovan Jovanovicaaa', 'joca@smca.coma', '+1234657897', '1985-02-05', '21321654897', '2023-03-11 14:17:10', 0),
(5, 'Srbce Mrvicaa', 'srbce@srbce.com', '+52416579685', '1985-04-16', '1235465', '2023-03-11 15:20:34', 0),
(6, 'Aleksandra', 'alex@potter.rs', '+654765432', '1958-02-15', '12345', '2023-03-11 15:48:47', 0),
(7, 'Mihajlo', 'mihajlojix@das.com', '+321465', '1985-05-16', '2000', '2023-03-12 15:22:43', 0),
(8, 'Lazar', 'Lazar@dobrodosli.za', '+6324165465', '1985-04-05', '1500', '2023-03-12 15:24:47', 1),
(9, 'Mika', 'mika@hotmail.com', '+54642313', '1994-04-15', '2500', '2023-03-12 17:35:38', 1),
(10, 'Marko', 'mare@cica.rs', 'as+652', '1985-12-04', '1265', '2023-03-12 18:02:41', 1),
(11, 'Dantea', 'dante@inferno.com', '+123465789', '1985-12-12', '1325', '2023-03-12 19:22:13', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL,
  `description` text NOT NULL,
  `duedate` datetime NOT NULL,
  `employe` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1=task is done',
  `createddate` datetime NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `duedate`, `employe`, `status`, `createddate`, `deleted`) VALUES
(1, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-01 18:46:00', 11, 0, '2023-03-11 18:00:33', 0),
(2, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-03-10 00:00:00', 11, 0, '2023-03-11 18:25:03', 1),
(3, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-17 19:23:25', 4, 1, '2023-03-11 19:33:15', 0),
(4, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 14:15:33', 6, 1, '2023-03-11 21:17:47', 0),
(5, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut na', '2023-03-12 16:39:32', 5, 1, '2023-03-12 12:44:58', 0),
(6, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 16:39:30', 6, 1, '2023-03-12 14:15:14', 0),
(7, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-04-04 19:38:44', 4, 0, '2023-03-12 14:15:52', 0),
(8, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-03-31 00:00:00', 4, 0, '2023-03-12 14:16:25', 0),
(9, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-03-12 16:39:30', 4, 1, '2023-03-12 14:16:33', 0),
(10, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-03-12 16:37:46', 6, 1, '2023-03-12 14:18:21', 0),
(11, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 14:20:59', 4, 1, '2023-03-12 14:20:59', 1),
(12, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 14:21:22', 4, 1, '2023-03-12 14:21:22', 0),
(13, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-01-11 14:50:06', 4, 1, '2023-03-12 14:50:06', 0),
(14, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 16:38:18', 2, 1, '2023-03-12 15:26:17', 0),
(15, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 16:38:17', 2, 1, '2023-02-12 15:28:51', 0),
(16, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 15:30:58', 5, 1, '2023-03-12 15:30:58', 0),
(17, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-02 00:00:00', 7, 1, '2023-03-12 15:31:23', 0),
(18, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 15:32:10', 8, 1, '2023-02-12 15:32:10', 0),
(19, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-12 15:32:46', 8, 1, '2023-03-12 15:32:46', 0),
(20, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-02-28 00:00:00', 6, 0, '2023-03-12 19:04:01', 0),
(21, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-03-12 00:00:00', 4, 0, '2023-03-12 19:04:06', 0),
(22, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-03-12 19:15:47', 4, 1, '2023-03-12 19:04:47', 0),
(23, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, ad laoreet debitis vix, probo libris ut nam.', '2023-03-15 00:00:00', 6, 0, '2023-03-12 19:23:05', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
