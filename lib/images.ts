const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMG = {
  hero: u("photo-1600585154340-be6161a56a0c", 2000),
  office: u("photo-1497366754035-f200968a6e72"),
  workspace: u("photo-1556761175-4b46a572b786"),
  meeting: u("photo-1556761175-b413da4baf72"),
  warehouse: u("photo-1581094271901-8022df4466f9"),
  warehouseAisle: u("photo-1568992687947-868a62a9f521"),
  truck: u("photo-1516733725897-1aa73b87c8e8"),
  hospital: u("photo-1551836022-d5d88e9218df"),
  building: u("photo-1570126618953-d437176e8c79", 2000),
  movingBoxes: u("photo-1604335399105-a0c585fd81a1"),
  boxStack: u("photo-1611532736597-de2d4265fba3"),
  packing: u("photo-1600585154340-be6161a56a0c"),
  laptopWork: u("photo-1542744173-8e7e53415bb0"),
  industry: u("photo-1567103472667-6898f3a79cf2"),
  city: u("photo-1542838132-92c53300491e", 2000),
  loading: u("photo-1586528116311-ad8dd3c8310d"),
  worker: u("photo-1591115765373-5207764f72e7"),
};
