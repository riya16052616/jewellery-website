-- Restore the local demo catalog's product names and sample prices.
-- Product rows are matched by their existing local image_url.
-- This updates products only; it does not delete rows or alter past order items.

WITH catalog_groups AS (
  SELECT *
  FROM (VALUES
    (
      'ring',
      ARRAY['Luna', 'Celeste', 'Rose', 'Aurora', 'Eternal', 'Willow', 'Starlight', 'Meadow', 'Solstice', 'Serene']::text[],
      ARRAY['Halo Ring', 'Solitaire Ring', 'Eternity Band', 'Twist Ring']::text[],
      0
    ),
    (
      'earring',
      ARRAY['Luna', 'Celeste', 'Rose', 'Aurora', 'Eternal', 'Willow', 'Starlight', 'Meadow', 'Solstice', 'Serene']::text[],
      ARRAY['Stud Earrings', 'Drop Earrings', 'Hoop Earrings', 'Jhumka Earrings']::text[],
      40
    ),
    (
      'necklace',
      ARRAY['Luna', 'Celeste', 'Rose', 'Aurora', 'Eternal', 'Willow', 'Starlight', 'Meadow', 'Solstice', 'Serene']::text[],
      ARRAY['Layered Necklace', 'Pendant Necklace', 'Chain Necklace', 'Collar Necklace']::text[],
      80
    ),
    (
      'bracelet',
      ARRAY['Dainty Cluster', 'Colorful Gemstone', 'Geometric Gold', 'Heart Charm', 'Diamond Tennis', 'Pearl Accent', 'Rose Gold', 'Twisted Rope', 'White Gold', 'Two Tone', 'Serpent', 'Birthstone', 'Waterdrop']::text[],
      ARRAY['Chain Bracelet', 'Gem Link Bracelet', 'Gold Bracelet', 'Pearl Bracelet']::text[],
      120
    )
  ) AS groups(category, prefixes, styles, old_group_offset)
), product_matches AS (
  SELECT
    product.id,
    groups.prefixes[((image_parts.number - 1) / 4) + 1]
      || ' ' || groups.styles[((image_parts.number - 1) % 4) + 1] AS restored_name,
    (ARRAY[20000, 25000, 32000, 39500, 50000, 65000, 80000, 100000]::numeric[])[
      (((groups.old_group_offset + image_parts.number - 1) * 7 + 3) % 8) + 1
    ] AS restored_price
  FROM public.products AS product
  JOIN catalog_groups AS groups
    ON LOWER(product.category) = groups.category
  CROSS JOIN LATERAL (
    SELECT regexp_match(
      product.image_url,
      '(ring|earring|necklace|bracelet)-([0-9]+)\.jpg$',
      'i'
    ) AS parts
  ) AS matched
  CROSS JOIN LATERAL (
    SELECT matched.parts[2]::integer AS number
  ) AS image_parts
  WHERE matched.parts IS NOT NULL
    AND image_parts.number BETWEEN 1 AND cardinality(groups.prefixes) * cardinality(groups.styles)
)
UPDATE public.products AS product
SET name = product_matches.restored_name,
    price = product_matches.restored_price
FROM product_matches
WHERE product.id = product_matches.id;
