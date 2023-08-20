INSERT INTO public.planets ("planetId", name, description, "createdAt", "updatedAt")
VALUES
    (1, 'Mercury', 'The smallest planet in the solar system.', NOW(), NOW()),
    (2, 'Venus', 'Known for its scorching temperatures.', NOW(), NOW()),
    (3, 'Earth', 'The only known planet to support life.', NOW(), NOW()),
    (4, 'Mars', 'Often referred to as the Red Planet.', NOW(), NOW()),
    (5, 'Jupiter', 'Largest planet with a distinctive gas giant appearance.', NOW(), NOW()),
    (6, 'Saturn', 'Famous for its beautiful rings.', NOW(), NOW()),
    (7, 'Uranus', 'Tilted planet with an icy blue color.', NOW(), NOW()),
    (8, 'Neptune', 'The farthest planet from the Sun.', NOW(), NOW()),
    (9, 'Pluto', 'Dwarf planet and former ninth planet of the solar system.', NOW(), NOW()),
    (10, 'Eris', 'Dwarf planet in the Kuiper Belt.', NOW(), NOW()),
    (11, 'Haumea', 'Dwarf planet with an elongated shape.', NOW(), NOW()),
    (12, 'Makemake', 'Dwarf planet in the outer solar system.', NOW(), NOW()),
    (13, 'Ceres', 'Dwarf planet and the largest object in the asteroid belt.', NOW(), NOW()),
    (14, 'Kepler-452b', 'Exoplanet orbiting a star similar to the Sun.', NOW(), NOW()),
    (15, 'HD 209458 b', 'Hot Jupiter exoplanet with a unique atmosphere.', NOW(), NOW()),
    (16, 'TRAPPIST-1d', 'Exoplanet in the habitable zone of the TRAPPIST-1 system.', NOW(), NOW()),
    (17, 'Gliese 581c', 'Exoplanet orbiting a red dwarf star.', NOW(), NOW()),
    (18, 'Proxima Centauri b', 'Exoplanet closest to Earth in the habitable zone of Proxima Centauri.', NOW(), NOW()),
    (19, 'WASP-39b', 'Hot Jupiter exoplanet with a short orbital period.', NOW(), NOW()),
    (20, 'HR 8799c', 'Exoplanet with a large orbital separation from its host star.', NOW(), NOW());


INSERT INTO public."flightSchedules" (
    "scheduleId", "flightName", "type", amount, status, 
    "departureTime", "arrivalTime", "departureDate", duration, 
    "businessClassSeatCount", "economyClassSeatCount", "firstClassSeatCount", 
    "createdAt", "updatedAt", "destinationPlanetId", "startPlanetId"
)
VALUES
    (1, 'SpaceX001', 'Commercial', 500, 'Scheduled',
     '08:00:00', '10:00:00', NOW() + INTERVAL '1 day', '02:00:00',
     20, 100, 10,
     NOW(), NOW(), 3, 1),
     
    (2, 'GalaxyX202', 'Tourist', 750, 'Cancelled',
     '12:00:00', '14:30:00', NOW() + INTERVAL '2 days', '02:30:00',
     10, 50, 5,
     NOW(), NOW(), 2, 4),
     
    (3, 'StellarVoyage', 'Exploration', 1000, 'Scheduled',
     '15:30:00', '18:00:00', NOW() + INTERVAL '3 days', '02:30:00',
     15, 80, 8,
     NOW(), NOW(), 7, 5),
     
    (4, 'CosmoTour 3000', 'Tourist', 600, 'Completed',
     '10:30:00', '13:00:00', NOW() + INTERVAL '4 days', '02:30:00',
     12, 60, 6,
     NOW(), NOW(), 1, 6),
     
    (5, 'Red Planet Expedition', 'Exploration', 1200, 'Scheduled',
     '09:00:00', '14:00:00', NOW() + INTERVAL '5 days', '05:00:00',
     18, 90, 9,
     NOW(), NOW(), 4, 2),
     
    (6, 'Celestial Cruiser', 'Commercial', 550, 'Scheduled',
     '08:30:00', '11:00:00', NOW() + INTERVAL '6 days', '02:30:00',
     15, 75, 7,
     NOW(), NOW(), 5, 3),
     
    (7, 'Starlight Express', 'Tourist', 700, 'Scheduled',
     '11:30:00', '15:00:00', NOW() + INTERVAL '7 days', '03:30:00',
     10, 50, 5,
     NOW(), NOW(), 3, 1),
     
    (8, 'Galactic Odyssey', 'Exploration', 950, 'Scheduled',
     '14:00:00', '17:30:00', NOW() + INTERVAL '8 days', '03:30:00',
     18, 90, 9,
     NOW(), NOW(), 2, 4),
     
    (9, 'MarsQuest 2023', 'Exploration', 1100, 'Scheduled',
     '09:30:00', '15:00:00', NOW() + INTERVAL '9 days', '05:30:00',
     20, 100, 10,
     NOW(), NOW(), 7, 5),
     
    (10, 'Sunset Voyage', 'Tourist', 600, 'Scheduled',
     '18:00:00', '20:30:00', NOW() + INTERVAL '10 days', '02:30:00',
     12, 60, 6,
     NOW(), NOW(), 1, 6),
     
    (11, 'Voyager One', 'Commercial', 500, 'Completed',
     '08:00:00', '10:00:00', NOW() + INTERVAL '11 days', '02:00:00',
     20, 100, 10,
     NOW(), NOW(), 4, 2),
     
    (12, 'Infinity Traveler', 'Tourist', 750, 'Scheduled',
     '12:00:00', '14:30:00', NOW() + INTERVAL '12 days', '02:30:00',
     10, 50, 5,
     NOW(), NOW(), 3, 1),
     
    (13, 'Galactic Safari', 'Exploration', 1000, 'Scheduled',
     '15:30:00', '18:00:00', NOW() + INTERVAL '13 days', '02:30:00',
     15, 80, 8,
     NOW(), NOW(), 2, 4),
     
    (14, 'Asteroid Adventure', 'Exploration', 600, 'Completed',
     '10:30:00', '13:00:00', NOW() + INTERVAL '14 days', '02:30:00',
     12, 60, 6,
     NOW(), NOW(), 7, 5),
     
    (15, 'Orbit Odyssey', 'Commercial', 1200, 'Scheduled',
     '09:00:00', '14:00:00', NOW() + INTERVAL '15 days', '05:00:00',
     18, 90, 9,
     NOW(), NOW(), 5, 3),
     
    (16, 'AstroLux Express', 'Tourist', 550, 'Scheduled',
     '08:30:00', '11:00:00', NOW() + INTERVAL '16 days', '02:30:00',
     15, 75, 7,
     NOW(), NOW(), 4, 2),
     
    (17, 'Nebula Voyager', 'Exploration', 700, 'Scheduled',
     '11:30:00', '15:00:00', NOW() + INTERVAL '17 days', '03:30:00',
     10, 50, 5,
     NOW(), NOW(), 3, 1),
     
    (18, 'Cosmic Discoverer', 'Exploration', 950, 'Scheduled',
     '14:00:00', '17:30:00', NOW() + INTERVAL '18 days', '03:30:00',
     18, 90, 9,
     NOW(), NOW(), 2, 4),
     
    (19, 'Pluto Expedition', 'Exploration', 1100, 'Scheduled',
     '09:30:00', '15:00:00', NOW() + INTERVAL '19 days', '05:30:00',
     20, 100, 10,
     NOW(), NOW(), 1, 6),
     
    (20, 'Galaxy Hopper', 'Tourist', 600, 'Scheduled',
     '18:00:00', '20:30:00', NOW() + INTERVAL '20 days', '02:30:00',
     12, 60, 6,
     NOW(), NOW(), 5, 3);
    


