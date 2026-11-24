-- Remove the Hindi-name necklace shown in the screenshot from the product catalog.
DELETE FROM public.products
WHERE image_url = 'assets/new-arrivals/hindi-name-heart-mangalsutra.png';
