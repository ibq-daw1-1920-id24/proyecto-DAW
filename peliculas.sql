-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-03-2024 a las 11:35:00
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
--
CREATE DATABASE IF NOT EXISTS `peliculas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `peliculas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(15) NOT NULL,
  `Descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `Nombre`, `Descripcion`) VALUES
(1, 'terror', 'las mejores películas de terror, para los más atrevidos que buscan pasar tensión'),
(2, 'accion', 'las mejores películas de acción, con buena variedad entre humor, violencia y misterio '),
(3, 'Animacion', 'las mejores películas de animación, para que puedan disfrutarlo todos los públicos'),
(4, 'romance', 'las mejores y mas conocidas películas de romance, para los más sentimentales'),
(5, 'drama', 'las mejores peliculas de dramáticas, donde la tensión estará por las nubes'),
(6, 'superheroes', 'las mejores peliculas de superheroes, para los amantes de marvel, DC etc...'),
(7, 'Comedia', 'las mejores y mas divertidas peliculas de comedia para disfrutar al maximo con risas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `precio` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `id_categoria`, `nombre`, `precio`) VALUES
(1, 6, 'spiderman', '10.00'),
(2, 6, 'el caballero oscuro ', '14.00'),
(3, 3, 'Coco', '9.00'),
(4, 3, 'Del reves', '4.00'),
(5, 1, 'Rec', '9.00'),
(6, 4, 'Bajo la misma estrella', '6.00'),
(7, 5, 'interstellar ', '12.00'),
(8, 2, 'Sin tiempo para morir', '9.00'),
(9, 1, 'rec 2', '5.00'),
(10, 4, 'Me before you', '6.00'),
(11, 6, 'Los vengadores ', '8.00'),
(12, 1, 'Hereditary', '10.00'),
(13, 5, '12 años de esclavitud', '9.00'),
(14, 3, 'el viaje de chihiro', '5.00'),
(15, 4, 'Titanic', '9.00'),
(16, 5, 'Multiple', '6.00'),
(17, 1, 'Midsommar', '12.00'),
(18, 6, 'Los vengadores Infinity war', '10.00'),
(19, 6, 'Los vengadores end game', '15.00'),
(20, 2, 'Los juegos del hambre', '8.00'),
(21, 2, 'Fast and furius 10 ', '5.00'),
(22, 2, 'Matrix', '9.00'),
(23, 2, 'Mision imposible', '12.00'),
(24, 4, 'Ghost', '10.00'),
(25, 1, 'Paranormal Activity ', '7.00'),
(26, 1, 'Saw', '9.00'),
(27, 1, 'Mama ', '7.00'),
(28, 1, 'The Thing ', '12.00'),
(29, 2, 'Piratas del Caribe', '8.00'),
(30, 2, 'Mad Max', '9.00'),
(31, 2, 'Kill Bill', '9.00'),
(32, 3, 'El Rey Leon', '8.00'),
(33, 3, 'Enredados', '7.00'),
(34, 3, 'Moana', '10.00'),
(35, 3, 'Frozen', '10.00'),
(36, 3, 'Tarzan', '6.00'),
(37, 4, 'La La Land', '12.00'),
(38, 4, 'Orgullo y Prejuicio', '9.00'),
(39, 4, 'El Diario de Noa ', '5.00'),
(40, 4, 'Amelie', '5.00'),
(41, 5, 'Inception ', '11.00'),
(42, 5, 'El Pianista', '9.00'),
(43, 5, 'El Padrino', '15.00'),
(44, 5, 'La lista de Schindler', '13.00'),
(45, 5, 'La vida es bella', '9.00'),
(46, 6, 'Capitan America Civil War', '11.00'),
(47, 6, 'Hulk', '7.00'),
(48, 6, 'El hombre de Acero', '5.00'),
(49, 7, 'Solo en casa ', '8.00'),
(50, 7, '8 apellidos vascos', '10.00'),
(51, 7, 'Scary movie', '9.00'),
(52, 7, 'American pie ', '5.00'),
(53, 7, 'Zoolander', '7.00'),
(54, 7, 'Y donde estan las rubias', '6.00'),
(55, 7, 'La mascara', '8.00'),
(56, 7, 'Infiltrados en clase', '10.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id categorias` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `peliculas_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
