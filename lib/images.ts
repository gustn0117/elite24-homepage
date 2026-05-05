const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMG = {
  heroBuilding: u("photo-1486406146926-c627a92ad1ab", 2000),
  heroSkyline: u("photo-1554224155-6726b3ff858f", 2000),
  office: u("photo-1497366754035-f200968a6e72"),
  workspace: u("photo-1556761175-5973dc0f32e7"),
  meeting: u("photo-1497366216548-37526070297c"),
  warehouse: u("photo-1581094271901-8022df4466f9"),
  warehouseAisle: u("photo-1568992687947-868a62a9f521"),
  truck: u("photo-1601584115197-04ecc0da31d7"),
  hospital: u("photo-1551836022-d5d88e9218df"),
  buildingDusk: u("photo-1494522855154-9297ac14b55f", 2000),
  movingBoxes: u("photo-1604335399105-a0c585fd81a1"),
  laptopWork: u("photo-1542744173-8e7e53415bb0"),
  industry: u("photo-1567103472667-6898f3a79cf2"),
  city: u("photo-1542838132-92c53300491e", 2000),
  loading: u("photo-1586528116311-ad8dd3c8310d"),
  worker: u("photo-1591115765373-5207764f72e7"),
};
