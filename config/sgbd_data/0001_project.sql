-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : pixel_up_mariadb:3306
-- Généré le : jeu. 16 mai 2024 à 13:40
-- Version du serveur : 10.4.18-MariaDB-1:10.4.18+maria~focal
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `project`
--

-- --------------------------------------------------------

--
-- Structure de la table `cat_mort`
--

CREATE TABLE `cat_mort` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cat_mort`
--

INSERT INTO `cat_mort` (`id`, `nom`) VALUES
(1, 'TOMBER'),
(2, 'REQUIN'),
(3, 'AVION'),
(4, 'ASTEROIDE'),
(5, 'FEU'),
(6, 'HELICOPTERE'),
(7, 'LAVE'),
(8, 'MEDUSE'),
(9, 'METEORITEFEU'),
(10, 'POISSON'),
(11, 'SATELLITE'),
(12, 'NACELLE'),
(13, 'NUAGE'),
(14, 'OISEAU'),
(15, 'PIERRE'),
(16, 'VAISSEAU'),
(17, 'VAISSEAUJAUNE'),
(18, 'RADFISH'),
(19, 'NUAGEGRIS'),
(20, 'NACELLECASSEE'),
(21, 'TENUE_NORMAL'),
(22, 'TENUE_MER'),
(23, 'TENUE_TERRE'),
(24, 'TENUE_CIEL'),
(25, 'TENUE_ESPACE');

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
('DoctrineMigrations\\Version20220818074048', '2024-05-16 11:29:27', 46),
('DoctrineMigrations\\Version20220818075210', '2024-05-16 11:29:28', 61),
('DoctrineMigrations\\Version20220818075958', '2024-05-16 11:29:28', 75),
('DoctrineMigrations\\Version20220818080410', '2024-05-16 11:29:28', 65),
('DoctrineMigrations\\Version20220818120428', '2024-05-16 11:29:28', 5),
('DoctrineMigrations\\Version20220819135837', '2024-05-16 11:29:28', 5),
('DoctrineMigrations\\Version20220822093400', '2024-05-16 11:29:28', 85),
('DoctrineMigrations\\Version20220824125433', '2024-05-16 11:29:28', 59);

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

-- --------------------------------------------------------

--
-- Structure de la table `mort`
--

CREATE TABLE `mort` (
  `id` int(11) NOT NULL,
  `cat_mort_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `compteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `mort`
--

INSERT INTO `mort` (`id`, `cat_mort_id`, `user_id`, `compteur`) VALUES
(1, 4, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

CREATE TABLE `score` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` double NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `score`
--

INSERT INTO `score` (`id`, `user_id`, `score`, `date`) VALUES
(1, 1, 0, '2024-05-16 13:38:05');

-- --------------------------------------------------------

--
-- Structure de la table `succes`
--

CREATE TABLE `succes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `succ1` int(11) NOT NULL,
  `succ2` int(11) NOT NULL,
  `succ3` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `succes`
--

INSERT INTO `succes` (`id`, `user_id`, `succ1`, `succ2`, `succ3`) VALUES
(1, 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`roles`)),
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `roles`, `password`) VALUES
(1, 'root', '[\"ROLE_USER\"]', '$2y$13$qBAPqzg0eTLpI5AuEco8m.bepyFa/jaMcCRCezlNK1CH8DlLQmRBS');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cat_mort`
--
ALTER TABLE `cat_mort`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `mort`
--
ALTER TABLE `mort`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_E1E2D28E505155C4` (`cat_mort_id`),
  ADD KEY `IDX_E1E2D28EA76ED395` (`user_id`);

--
-- Index pour la table `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_32993751A76ED395` (`user_id`);

--
-- Index pour la table `succes`
--
ALTER TABLE `succes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_BFC22383A76ED395` (`user_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649F85E0677` (`username`);
ALTER TABLE `user` ADD FULLTEXT KEY `name_fulltext_index` (`username`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cat_mort`
--
ALTER TABLE `cat_mort`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `mort`
--
ALTER TABLE `mort`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `score`
--
ALTER TABLE `score`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `succes`
--
ALTER TABLE `succes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `mort`
--
ALTER TABLE `mort`
  ADD CONSTRAINT `FK_E1E2D28E505155C4` FOREIGN KEY (`cat_mort_id`) REFERENCES `cat_mort` (`id`),
  ADD CONSTRAINT `FK_E1E2D28EA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `FK_32993751A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `succes`
--
ALTER TABLE `succes`
  ADD CONSTRAINT `FK_BFC22383A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
