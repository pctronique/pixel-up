-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 01 juil. 2022 à 13:05
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `acsassociation`
--
CREATE DATABASE IF NOT EXISTS `acsassociation` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `acsassociation`;

-- --------------------------------------------------------

--
-- Structure de la table `add_files`
--

CREATE TABLE `add_files` (
  `id` int(11) NOT NULL,
  `produits_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`) VALUES
(1, 'Décoration', 'decoration'),
(2, 'Informatique', 'informatique'),
(3, 'Mobilier', 'mobilier'),
(4, 'Electroménager', 'electromenager');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220627210844', '2022-06-29 08:51:29', 866),
('DoctrineMigrations\\Version20220628072050', '2022-06-29 08:51:30', 1477),
('DoctrineMigrations\\Version20220628073104', '2022-06-29 08:51:31', 712),
('DoctrineMigrations\\Version20220628074353', '2022-06-29 08:51:32', 2135),
('DoctrineMigrations\\Version20220628080048', '2022-06-29 08:51:34', 1053),
('DoctrineMigrations\\Version20220628123805', '2022-06-29 08:51:35', 651),
('DoctrineMigrations\\Version20220629080846', '2022-06-29 08:51:36', 2336),
('DoctrineMigrations\\Version20220629081608', '2022-06-29 08:51:38', 2047),
('DoctrineMigrations\\Version20220630073041', '2022-06-30 07:31:15', 683),
('DoctrineMigrations\\Version20220630073056', '2022-06-30 08:32:13', 869),
('DoctrineMigrations\\Version20220630074108', '2022-06-30 07:41:17', 961);

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `produits_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `produits_id`, `name`, `src`) VALUES
(18, 5, '6934aac3dc1060ce8e5849ef455367cd.jpg', '6934aac3dc1060ce8e5849ef455367cd.jpg'),
(19, 5, '7b178546587e4c0c60330bc475be67e2.jpg', '7b178546587e4c0c60330bc475be67e2.jpg'),
(20, 6, '9b237342ccd7f626219213c525b6f842.jpg', '9b237342ccd7f626219213c525b6f842.jpg'),
(21, 6, '95b351fd19534f752ca357c9417a536e.jpg', '95b351fd19534f752ca357c9417a536e.jpg'),
(22, 7, '8cc503fc04bc8131bdef1e4086009e2b.jpg', '8cc503fc04bc8131bdef1e4086009e2b.jpg'),
(23, 7, '681fe3b45b24f51f55627594ba2b9aa8.jpg', '681fe3b45b24f51f55627594ba2b9aa8.jpg'),
(24, 8, '8674829ab20bb86b0cc0a6dfb2809d88.jpg', '8674829ab20bb86b0cc0a6dfb2809d88.jpg'),
(25, 8, '7dbf1a2aeb9a3c3cb123bc65821783a0.jpg', '7dbf1a2aeb9a3c3cb123bc65821783a0.jpg'),
(26, 9, 'a3ee77c59768a2b318406074baf2a580.jpg', 'a3ee77c59768a2b318406074baf2a580.jpg'),
(27, 9, '7a71063abd2c75269918e43db0d2086b.jpg', '7a71063abd2c75269918e43db0d2086b.jpg'),
(28, 10, 'd8bc117f61a6144f85d601673b474a2f.jpg', 'd8bc117f61a6144f85d601673b474a2f.jpg'),
(29, 10, '5e97157bc1b7aa7486b66795c43f8004.jpg', '5e97157bc1b7aa7486b66795c43f8004.jpg'),
(30, 11, '7f355ba7b441bbf76fda338eedfcb581.jpg', '7f355ba7b441bbf76fda338eedfcb581.jpg'),
(31, 11, 'c4ffc11a3c5e40beb8ec966206683e14.jpg', 'c4ffc11a3c5e40beb8ec966206683e14.jpg'),
(32, 12, '95feacc8f0ce2ecef05e918f872172f4.jpg', '95feacc8f0ce2ecef05e918f872172f4.jpg'),
(33, 12, '69d120fbf1da452b7b4a043953b7f32b.jpg', '69d120fbf1da452b7b4a043953b7f32b.jpg'),
(34, 13, 'cff5a9bb1e91f161523ccf1fd9e8e22b.jpg', 'cff5a9bb1e91f161523ccf1fd9e8e22b.jpg'),
(35, 13, '5f13d1bc486759c020b132bf65bf9d00.jpg', '5f13d1bc486759c020b132bf65bf9d00.jpg'),
(36, 14, 'b13c6cf48debb6d1e3af2fca1c9816ad.jpg', 'b13c6cf48debb6d1e3af2fca1c9816ad.jpg'),
(37, 14, '100800e406be488a6a5f94e247e09f6b.jpg', '100800e406be488a6a5f94e247e09f6b.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `messenger_messages`
--

INSERT INTO `messenger_messages` (`id`, `body`, `headers`, `queue_name`, `created_at`, `available_at`, `delivered_at`) VALUES
(1, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":4:{i:0;s:41:\\\"registration/confirmation_email.html.twig\\\";i:1;N;i:2;a:3:{s:9:\\\"signedUrl\\\";s:168:\\\"https://127.0.0.1:8000/verify/email?expires=1656496410&signature=IZ0BWkj2R5YqBR3iJs5wjuvqJ%2FTMSf4YaQ4l%2FB3yVEE%3D&token=97T59dKPC6e8DgPIgjUSkK52q30nCQJCzsH4kOcXBco%3D\\\";s:19:\\\"expiresAtMessageKey\\\";s:26:\\\"%count% hour|%count% hours\\\";s:20:\\\"expiresAtMessageData\\\";a:1:{s:7:\\\"%count%\\\";i:1;}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:18:\\\"acs@association.fr\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:14:\\\"AcsAssociation\\\";}}s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:15:\\\"contact@demo.fr\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:25:\\\"Please Confirm your Email\\\";s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2022-06-29 08:53:30', '2022-06-29 08:53:30', NULL),
(2, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":4:{i:0;s:30:\\\"reset_password/email.html.twig\\\";i:1;N;i:2;a:1:{s:10:\\\"resetToken\\\";O:58:\\\"SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\\":4:{s:65:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0token\\\";s:40:\\\"V2YNuxzWQZZk1TMiMFrzXdbREUGvCo0OBJGC4GlH\\\";s:69:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0expiresAt\\\";O:17:\\\"DateTimeImmutable\\\":3:{s:4:\\\"date\\\";s:26:\\\"2022-06-30 08:14:40.796237\\\";s:13:\\\"timezone_type\\\";i:3;s:8:\\\"timezone\\\";s:3:\\\"UTC\\\";}s:71:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0generatedAt\\\";i:1656573280;s:73:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0transInterval\\\";i:1;}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:26:\\\"no-reply@acsassociation.fr\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:17:\\\"AcsAssociation.fr\\\";}}s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:15:\\\"contact@demo.fr\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:27:\\\"Your password reset request\\\";s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2022-06-30 07:14:42', '2022-06-30 07:14:42', NULL),
(3, 'O:36:\\\"Symfony\\\\Component\\\\Messenger\\\\Envelope\\\":2:{s:44:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0stamps\\\";a:1:{s:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\";a:1:{i:0;O:46:\\\"Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\\":1:{s:55:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Stamp\\\\BusNameStamp\\0busName\\\";s:21:\\\"messenger.bus.default\\\";}}}s:45:\\\"\\0Symfony\\\\Component\\\\Messenger\\\\Envelope\\0message\\\";O:51:\\\"Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\\":2:{s:60:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0message\\\";O:39:\\\"Symfony\\\\Bridge\\\\Twig\\\\Mime\\\\TemplatedEmail\\\":4:{i:0;s:30:\\\"reset_password/email.html.twig\\\";i:1;N;i:2;a:1:{s:10:\\\"resetToken\\\";O:58:\\\"SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\\":4:{s:65:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0token\\\";s:40:\\\"U6J7S18ItBCoAqDugq1mzV3UG1aPKnsplaggEdP3\\\";s:69:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0expiresAt\\\";O:17:\\\"DateTimeImmutable\\\":3:{s:4:\\\"date\\\";s:26:\\\"2022-06-30 14:37:37.498952\\\";s:13:\\\"timezone_type\\\";i:3;s:8:\\\"timezone\\\";s:3:\\\"UTC\\\";}s:71:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0generatedAt\\\";i:1656596257;s:73:\\\"\\0SymfonyCasts\\\\Bundle\\\\ResetPassword\\\\Model\\\\ResetPasswordToken\\0transInterval\\\";i:1;}}i:3;a:6:{i:0;N;i:1;N;i:2;N;i:3;N;i:4;a:0:{}i:5;a:2:{i:0;O:37:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\\":2:{s:46:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0headers\\\";a:3:{s:4:\\\"from\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:26:\\\"no-reply@acsassociation.fr\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:17:\\\"AcsAssociation.fr\\\";}}s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:4:\\\"From\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}s:2:\\\"to\\\";a:1:{i:0;O:47:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\\":5:{s:58:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\MailboxListHeader\\0addresses\\\";a:1:{i:0;O:30:\\\"Symfony\\\\Component\\\\Mime\\\\Address\\\":2:{s:39:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0address\\\";s:15:\\\"contact@demo.fr\\\";s:36:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Address\\0name\\\";s:0:\\\"\\\";}}s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:2:\\\"To\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}s:7:\\\"subject\\\";a:1:{i:0;O:48:\\\"Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\\":5:{s:55:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\UnstructuredHeader\\0value\\\";s:27:\\\"Your password reset request\\\";s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0name\\\";s:7:\\\"Subject\\\";s:56:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lineLength\\\";i:76;s:50:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0lang\\\";N;s:53:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\AbstractHeader\\0charset\\\";s:5:\\\"utf-8\\\";}}}s:49:\\\"\\0Symfony\\\\Component\\\\Mime\\\\Header\\\\Headers\\0lineLength\\\";i:76;}i:1;N;}}}s:61:\\\"\\0Symfony\\\\Component\\\\Mailer\\\\Messenger\\\\SendEmailMessage\\0envelope\\\";N;}}', '[]', 'default', '2022-06-30 13:37:39', '2022-06-30 13:37:39', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `achat_at` datetime NOT NULL,
  `guarantee_at` datetime NOT NULL,
  `price` int(11) NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `manuel_src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ticket_src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `categories_id`, `users_id`, `name`, `slug`, `achat_at`, `guarantee_at`, `price`, `content`, `active`, `created_at`, `manuel_src`, `ticket_src`) VALUES
(5, 2, 1, 'Ordinateur ASUS VIVO', 'ordinateur-asus-vivo', '2017-01-01 00:00:00', '2021-01-01 00:00:00', 899, '<p>PC tout en un Asus M3700 dispose d&#39;un &eacute;cran 27&quot; Full HD aux bordures quasi-invisibles sur 3 cot&eacute;s pour un incroyable rendu bords-&agrave;-bords et un rapport &eacute;cran/appareil de 91%. Combin&eacute; avec le syst&egrave;me audio Asus SonicMaster comprenant un syst&egrave;me de haut-parleur avec traitement DTS et une annulation de bruit 2 voies par IA, le tout-en-un Asus M3700 vous immerge dans vos divertissement pour une exp&eacute;rience visuel et sonore ultime.</p>', 1, '2022-07-01 09:13:07', '42c0e06a127f42233d067b9b0af16d82.pdf', '25ee70928984d82583d8fc3384226538.pdf'),
(6, 2, 1, 'Imprimante HP WIDE PRO 477DW', 'imprimante-hp-wide-pro-477dw', '2020-03-01 00:00:00', '2023-03-01 00:00:00', 380, '<p>Impression jet d&#39;encre couleur.<br />\r\n4 en 1 : Imprime, scan, fax et copie.<br />\r\nVitesse d&#39;impression noir et couleur (ppm) : 40 ppm en noir et 40 ppm en couleur.<br />\r\nInterface de connexion : USB 2.0, Ethernet, WiFi et Cloud.<br />\r\nRecto-verso : Automatique.<br />\r\nVolume max de copie mensuelles : 50 000.<br />\r\nChargeur de documents de 50 feuilles.<br />\r\nR&eacute;serve papier : 500+50 feuilles.<br />\r\nR&eacute;solution optique (dpi) : 2400 x 1200.<br />\r\nPoids : 22,1 kg.<br />\r\nSyst&egrave;me d&#39;exploitation requis : Windows 10, W8, W7, Vista, XP ou Mac Os.<br />\r\nDimensions : 39,8 x 53 x 30,4 cm.<br />\r\n&nbsp;</p>', 1, '2022-07-01 09:25:33', '3fcbbbe50e7d55b8aecd3f9826a555f6.pdf', 'e135f960e234de9d7a5bd02c80dd6922.pdf'),
(7, 2, 1, 'Ordinateur ACER ASPIRE C27-1655', 'ordinateur-acer-aspire-c27-1655', '2017-08-08 00:00:00', '2022-08-08 00:00:00', 919, '<p><strong>Processeur&nbsp;Intel Core&trade; i5, RAM 8 Go, carte graphique NVidia GeForce MX330</strong></p>\r\n\r\n<p>Cet ordinateur embarque&nbsp;&nbsp;<strong>un processeur&nbsp;</strong><strong>Intel Core&trade; i5-1135G7</strong><strong>&nbsp;cadenc&eacute; &agrave;&nbsp;2,4&nbsp;GHz de fr&eacute;quence de base (jusqu&rsquo;&agrave;&nbsp;4,2 GHz en mode Turbo Boost)&nbsp;</strong>avec&nbsp;8&nbsp;Mo de m&eacute;moire cache pour optimiser son fonctionnement interne et fluidifier l&#39;affichage.</p>\r\n\r\n<p>Il dispose &eacute;galement&nbsp;<strong>d&#39;une carte graphique&nbsp;NVidia GeForce MX330&nbsp;d&eacute;di&eacute;e</strong>&nbsp;pour un affichage optimis&eacute; et fluide &agrave; l&#39;&eacute;cran.</p>\r\n\r\n<p>Il est dot&eacute; de&nbsp;<strong>8&nbsp;Go de m&eacute;moire vive&nbsp;DDR4</strong>&nbsp;qui vous assureront une utilisation fluide dans tous vos usages quotidiens.</p>', 1, '2022-07-01 09:30:28', 'a4f6b0d62a95222d1d9cc818b8de4040.pdf', '21250586c2ba9462f32d7ca43d898b4e.pdf'),
(8, 2, 1, 'Téléphone GIGASET A700A QUATTRO', 'telephone-gigaset-a700a-quattro', '2021-04-05 00:00:00', '2023-04-05 00:00:00', 99, '<p>&bull; &Eacute;cran r&eacute;tro &eacute;clair&eacute; blanc : 2&rsquo;&rsquo; (96 x 64 pixels - 34 mm x 37 mm</p>\r\n\r\n<p>&bull; Affichage en veille</p>\r\n\r\n<p>- Date/heure</p>\r\n\r\n<p>- &Eacute;tat de charge de la batterie</p>\r\n\r\n<p>- Notification d&rsquo;appels en absence</p>\r\n\r\n<p>- Ic&ocirc;ne de l&rsquo;alarme</p>\r\n\r\n<p>- Ic&ocirc;ne de la fonction r&eacute;pondeur</p>\r\n\r\n<p>&bull; Affichage en communication</p>\r\n\r\n<p>- Dur&eacute;e de communication</p>', 1, '2022-07-01 09:42:51', '32060f264a0b8446eed9fdff1aa68577.pdf', 'b20b6925feef168e430bd154091b6508.pdf'),
(9, 3, 1, 'Bureau d\'angle', 'bureau-dangle', '2020-03-07 00:00:00', '2022-03-07 00:00:00', 150, '<p>Pi&egrave;tement en Tube m&eacute;tal laqu&eacute; &eacute;poxy noir<br />\r\nPlateau en verre tremp&eacute; noir</p>\r\n\r\n<p>Dimensions: L 160 x H 74 x P 160cm.</p>', 1, '2022-07-01 09:48:46', '1fb6e7be833ccb5c5e76605d96ef545b.pdf', '251890aba44806a6a4acca6195775f2a.pdf'),
(10, 3, 1, 'Chaise de bureau', 'chaise-de-bureau', '2017-01-01 00:00:00', '2019-01-01 00:00:00', 120, '<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:Verdana\"><span style=\"color:#353535\">Dimensions:</span></span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:Verdana\"><span style=\"color:#353535\">- Profondeur d&#39;assise: 55,5cm</span></span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:Verdana\"><span style=\"color:#353535\">- Hauteur d&#39;asssise minimum: 87,5cm</span></span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:Verdana\"><span style=\"color:#353535\">- Hauteur d&#39;asssise maximum: 97,5cm</span></span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:Verdana\"><span style=\"color:#353535\">- Largeur: 42cm</span></span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\"><span style=\"color:#000000\"><span style=\"background-color:#ffffff\">Composition/rev&ecirc;tement:</span></span></span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\">- Assise:</span></span></span></span><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\">&nbsp;polyur&eacute;thane&nbsp;</span></span>&nbsp;</span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\">- Dossier:</span></span></span></span><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\">&nbsp;polyur&eacute;thane</span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\"><span style=\"background-color:#ffffff\"><span style=\"color:#000000\">- Structure:</span></span></span></span><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\">&nbsp;polyur&eacute;thane et polyester</span></span><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\">&nbsp;garnissage mousse&nbsp;</span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\">- Pi&egrave;tement: m&eacute;tal chrom&eacute;, roulettes nylon</span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\">&nbsp;</span></span></span><span style=\"font-size:medium\"><span style=\"font-family:Cambria\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\">Colisage:</span></span></span></span></span></p>\r\n\r\n<p style=\"text-align:start\"><span style=\"font-size:14px\"><span style=\"font-family:Poppins,sans-serif\"><span style=\"color:#000000\"><span style=\"font-size:x-small\"><span style=\"font-family:verdana,geneva\">- Poids total colis: 10,8kg</span></span>&nbsp;&nbsp;&nbsp;</span></span></span></p>', 1, '2022-07-01 09:51:26', 'e152e70df39244cd1f8cf4d34a79de0e.pdf', 'cc0c1639f8befee695c6e57785a0ea43.pdf'),
(11, 3, 1, '6 chaises', '6-chaises', '2020-03-05 00:00:00', '2023-03-05 00:00:00', 160, '<p><strong>Dimensions des chaises scandinaves mix color</strong></p>\r\n\r\n<p>- Coloris mix color : blanc, gris clair, bleu canard x2, gris fonc&eacute; x2<br />\r\n- Dimensions : 48x60x80cm<br />\r\n- Largeur ext&eacute;rieure entre 2 pi&egrave;tements : 23.5/43.5 cm</p>', 1, '2022-07-01 09:55:12', '023968bde71436fefb7e301a598b5aea.pdf', '5da5703320d3889b513e1203a71f26f9.pdf'),
(12, 1, 1, '2 lampes de bureau', '2-lampes-de-bureau', '2021-09-01 00:00:00', '2021-09-01 00:00:00', 60, '<p>Lampe bureau HIPATIA anthracite-13cm- 1 lumi&egrave;re vers le bas x douille E27-cordon 60 cm noir-abat-jour 12cm acier globe ronde anthracite-Ampoule standard A19 maxi 40W halog&egrave;ne Conseill&eacute;e LED A++ 7W &eacute;quivalent &agrave; 60W Non inclus-style urbain --dimensions long 13xlarg 15xhaut 31 cm</p>', 1, '2022-07-01 09:57:55', '48ce25ef3301aea50b758bffd8ba947d.pdf', 'd43cb4feda22d7c70b3ef4d8fed68b18.pdf'),
(13, 4, 1, 'Cafetière SENSEO PHILIPS', 'cafetiere-senseo-philips', '2019-06-01 00:00:00', '2022-06-01 00:00:00', 99, '<p>La nouvelle machine &agrave; caf&eacute; SENSEO&reg; Quadrante maximise les saveurs du caf&eacute; gr&acirc;ce &agrave; la technologie SENSEO&reg; Booster d&#39;ar&ocirc;mes permettant &agrave; l&#39;eau d&#39;entrer en contact avec la totalit&eacute; des 50&nbsp;grains de caf&eacute; &agrave; la fois, pour un go&ucirc;t plus riche et intense. Son s&eacute;lecteur d&#39;intensit&eacute; permet plus de choix.</p>', 1, '2022-07-01 10:01:10', '18025f2bced4ff005dad495da930f98d.pdf', 'ac4aedc14662cc4f08b3512336dff679.pdf'),
(14, 4, 1, 'Refrigerateur congelateur THOMSON CTH3170IX', 'refrigerateur-congelateur-thomson-cth3170ix', '2018-08-06 00:00:00', '2022-08-06 00:00:00', 600, '<p><strong>Le r&eacute;frig&eacute;rateur-cong&eacute;lateur&nbsp;Thomson CTH3170IX b&eacute;n&eacute;ficie du froid ventil&eacute; : finie la corv&eacute;e du d&eacute;givrage ! Son &eacute;clairage LED&nbsp;apporte une excellente visibilit&eacute; &agrave; l&#39;int&eacute;rieur de l&#39;appareil.</strong></p>\r\n\r\n<p><strong>Froid ventil&eacute;</strong></p>\r\n\r\n<p>Ce r&eacute;frig&eacute;rateur-cong&eacute;lateur est dot&eacute; du froid ventil&eacute;. Ce syst&egrave;me produit un air froid et sec qui circule en permanence dans l&#39;appareil. Cela garantit une&nbsp;absence totale de givre, facilite l&#39;entretien,&nbsp;une temp&eacute;rature uniforme dans tout l&#39;appareil et permet de ranger n&#39;importe quel aliment sur n&#39;importe quelle clayette.</p>', 1, '2022-07-01 11:35:01', 'e96655a3849cc72a69c888be950a0541.pdf', '32242b9675f3d79d9d9c77633b90312d.pdf');

-- --------------------------------------------------------

--
-- Structure de la table `reset_password_request`
--

CREATE TABLE `reset_password_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `selector` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hashed_token` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `requested_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `expires_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reset_password_request`
--

INSERT INTO `reset_password_request` (`id`, `user_id`, `selector`, `hashed_token`, `requested_at`, `expires_at`) VALUES
(1, 1, 'V2YNuxzWQZZk1TMiMFrz', 'BQplFcNjw1xVj7dnURCuzHqiZ+VwgAettsm51aDmfSo=', '2022-06-30 07:14:40', '2022-06-30 08:14:40'),
(2, 1, 'U6J7S18ItBCoAqDugq1m', '2tupqFHpII4vsCUuuxzTa9yqECnzASH74oBCoGPtJx0=', '2022-06-30 13:37:37', '2022-06-30 14:37:37');

-- --------------------------------------------------------

--
-- Structure de la table `type_file`
--

CREATE TABLE `type_file` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type_file`
--

INSERT INTO `type_file` (`id`, `name`) VALUES
(1, 'Manuel'),
(2, 'Ticket');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_verified` tinyint(1) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `roles`, `password`, `is_verified`, `name`, `firstname`) VALUES
(1, 'contact@demo.fr', '[]', '$2y$13$bDazOHb8BV3AVIR58OJWfeTQ2MrMbK/hTGdYhToQZwVcv1/0Xpr/a', 1, 'Geoffroid', 'Vanessa');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `add_files`
--
ALTER TABLE `add_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BB864A98CD11A2CF` (`produits_id`),
  ADD KEY `IDX_BB864A98C54C8C93` (`type_id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_E01FBE6ACD11A2CF` (`produits_id`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_BE2DDF8C67B3B43D` (`users_id`),
  ADD KEY `IDX_BE2DDF8CA21214B7` (`categories_id`);

--
-- Index pour la table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_7CE748AA76ED395` (`user_id`);

--
-- Index pour la table `type_file`
--
ALTER TABLE `type_file`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_1483A5E9E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `add_files`
--
ALTER TABLE `add_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `type_file`
--
ALTER TABLE `type_file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `add_files`
--
ALTER TABLE `add_files`
  ADD CONSTRAINT `FK_BB864A98C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `type_file` (`id`),
  ADD CONSTRAINT `FK_BB864A98CD11A2CF` FOREIGN KEY (`produits_id`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `FK_E01FBE6ACD11A2CF` FOREIGN KEY (`produits_id`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `FK_BE2DDF8C67B3B43D` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FK_BE2DDF8C7B478B1A` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `reset_password_request`
--
ALTER TABLE `reset_password_request`
  ADD CONSTRAINT `FK_7CE748AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
