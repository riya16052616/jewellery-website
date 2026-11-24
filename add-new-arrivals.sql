-- Add the nine necklace designs supplied for the New Arrivals page.
-- These are sample prices from the existing demo catalog.

INSERT INTO public.products (name, category, description, price, image_url, stock)
SELECT item.name, item.category, item.description, item.price, item.image_url, 10
FROM (VALUES
  ('Custom V Diamond Mangalsutra', 'necklace', 'Gold mangalsutra necklace with black beads and a V-shaped diamond detail.', 39500.00, 'assets/new-arrivals/custom-v-diamond-mangalsutra.png'),
  ('K Initial Diamond Mangalsutra', 'necklace', 'Gold mangalsutra with a K initial pendant and delicate black beads.', 25000.00, 'assets/new-arrivals/initial-k-mangalsutra.png'),
  ('S Initial Gold Mangalsutra', 'necklace', 'Minimal gold mangalsutra featuring an S initial and a small dark accent stone.', 20000.00, 'assets/new-arrivals/initial-s-mangalsutra.png'),
  ('M Infinity Initial Mangalsutra', 'necklace', 'Gold mangalsutra with an infinity pendant and M initial detail.', 100000.00, 'assets/new-arrivals/infinity-m-initial-mangalsutra.png'),
  ('A Infinity Initial Mangalsutra', 'necklace', 'Gold mangalsutra with a diamond-accented infinity pendant and A initial detail.', 80000.00, 'assets/new-arrivals/infinity-a-initial-mangalsutra.png'),
  ('Floral Diamond Mangalsutra', 'necklace', 'Gold mangalsutra with a floral diamond pendant and black bead accents.', 65000.00, 'assets/new-arrivals/floral-diamond-mangalsutra.png'),
  ('Petite Floral Mangalsutra', 'necklace', 'Delicate gold mangalsutra with a petite floral diamond pendant.', 50000.00, 'assets/new-arrivals/petite-floral-mangalsutra.png'),
  ('Minimal Floral V Mangalsutra', 'necklace', 'Gold mangalsutra with a small floral pendant and fine V-shaped diamond accents.', 39500.00, 'assets/new-arrivals/minimal-floral-mangalsutra.png'),
  ('Pear Drop Diamond Mangalsutra', 'necklace', 'Gold mangalsutra with a pear-shaped diamond drop pendant and black beads.', 32000.00, 'assets/new-arrivals/pear-drop-mangalsutra.png')
) AS item(name, category, description, price, image_url)
WHERE NOT EXISTS (
  SELECT 1
  FROM public.products AS existing
  WHERE existing.image_url = item.image_url
);
