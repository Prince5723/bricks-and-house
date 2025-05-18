import PricingCard from './blocks/pricing-section';

const pricingData = {
  lilly: {
    title: 'ROSE',
    price: '₹ 1950/sq.ft',
    color: 'blue' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          'Designs & Drawings',
          'Architectural Layout 2D',
          'Basic Elevation Structural Design',
          'Elevation 3D',
        ]
      },
      {
        title: 'Structure',
        details: [
          'Steel - Prime gold, Kamdhenu or equivalent',
          'Cement- Birla, ACC, or equivalent',
          'Aggregate - 20 mm, 10 mm, 40mm',
          'Brick - 7.5 N/cm²',
          'Block - AAC Block, 300m, 200mm',
          'Brick - 7.5 N/cm²',
          'RCC, Desigen mix 20, 25, m',
          'PCC - 7.5 grade/False Ceiling',
          'Ceiling height - 11 FT, (Finish floored to Roof Level)',
          'Water proofing - Footings',
          'Staircase/Balcony - MS Railing',
          'Anti termite treatment',
        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Ceramic wall dado, upto Rs. 40 per sqft, Main sink faucet upto Rs 1500',
          'Any other faucet or Accessories upto Rs.10000 - ISI marked',
          'Kitchen Sink- S.S. Worth Rs 4000',
          'Modular Kitchen',
          'Chimney',
          'Water Proofing - Sink Area',
        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Ceramic tiles upto 7" height Rs-65/Sqft',
          'Sanitary ware up to 30,000, mark ISI',
          'CPVC pipe fitting Supreme/Astral + Geyser (15 Ltr)',
          'Bathroom doors - Aluminium frame with Acralic',
          'Water Proofing - Sunken Waterproofing',
          'Overhead water tank 2000 Ltr',
        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'Aluminum windows with glass shutter and mesh shutter (3 Track & I mash) of Jindal Profile',
          'Main Doors: Flush doors with Vineer. (32mm),Doors frame (Sal and Marandi Red)',
          'Internal Doors: Flush doors with laminates'


        ]
      },
      {
        title: 'Painting',
        details: [
          'Internal painting - Wall PDP/Primer/Chaak Mitti, Paint Emulsion(Asian/Berger), Door Frame - Deco. Paint, Texture Paint as decided',
          'External painting - JK putty/Sakarni putty, Waterproof Primer, Weather Shield paint - Asian/Berger',
        ]
      },
      {
        title: 'Flooring',
        details: [
          'Living & Dinning Flooring - Tiles of - value up to Rs 60 per sqft',
          'Rooms & Kitchen flooring - Tiles of Rs.50 per sqft',
          'Balcony, open area flooring - Antiskide tiles of Rs. 40 per sqft',
          'Stair case flooring - Granite of value Rs.150 per sqft',
          'Parking tiles- Antiskid tiles or checked tiles / paver block',
          'Roof flooring - Moracco tiles upto Rs.125 per sqft',
          'Water proofing - Roof, Balcony, Agent - Pidilite(LW/URP)',

        ]
      },
      {
        title: 'Electrical',
        details: [
          'Wire - fire proof wire by Finolex',
          'Switches & sockets - legards or equivalent',
          'Lights',
          'Fans',
          'Earthing',
          'Chandeliers',
          
        ]
      },
      {
        title: 'Smart Homes',
        details: [
          'Wi-Fi',
          'Heat Pump'
        ]
      }
    ]
  },
  rose: {
    title: 'ORCHID',
    price: '₹ 2000/sq.ft',
    color: 'orange' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          'Architectural layout - 2D. Basic elevation',
          'Structural Design 3D elevation',
          'All Services Drawings - Electrical, Plumbing, AC, HVAC or VPV',

        ]
      },
      {
        title: 'Structure',
        details: [
          'Steel - Jindal + Rathi',
          'Cement - ACC',
          'Aggregates - 20, 10, 40 mm',
          'Bricks. - 7.5 N/cm², AAC Blocks',
          'RCC Design Mix - All approved by Architect',
          'Celing height 11 feet  ( FFL TO FFL )',
          'False Ceiling',
          'Staircase/Balcony - MS Railing/Glass Railing',

        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Ceramic wall dado upto Rs. 80 sqft',
          'Main Sink. faucet - upto Rs- 4000/-',
          'Any of the faucet or Accessores ISI Mark',
          'Kitchen counter of Granite finish',
          'Modular Kitchen',
          'Chimney',
          'Fridge - 236 Ltr (Double Door)',
          'Water Proofing - Sink LW/URP',

        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Ceremic wall dado 7" height. upto Rs. 60 per sqft',
          'Sanitaryware & cpvc fitting up to Rs. 45000 per sqft of Jaguar make',
          'CPVC pipe - Apl Apollo, or similar',
          'Doors - waterproof flush doors',
          'Heat grill',
          'Overhead water tank 2000 Ltr',
          'Sunken Waterproofing - Agent (LW/URP)',

        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'UPVC windows (3 Track, 5mm glass thickness)',
          'Internal doors flush doors and main door (32mm) with Veneer, (Door frame - Marandi or Sal)',
          'Wardrobe Wooden / SS',
          'TV wall Panelling',

        ]
      },
      {
        title: 'Painting',
        details: [
          'Internal painting - Wall POP, Primer, Chaak Primer, Royal Emulsion for Ceiling, Velvet touch for walls, Door frame - Deco. Paint, Texture Paint as decided',
          'External - JK putty, Deluxe weather shield paint',

        ]
      },
      {
        title: 'Flooring',
        details: [
          'Living & Dinning flooring - Tiles or granite or marble up to Rs 150 per sqft',
          'Rooms, Kitchen,Living Area,Balcony & Open Area- Rs.100 per sqft. anti skid tiles of value Rs.80 per sqft',
          'Staircase, Flooring Granite upto Rs 150 per sqft.',
          'Parking Anti Skid tiles / Kota Stone / Paver Block',
          'Balcony - Moracco tiles',
          'Roof - Moracco tiles',
          'Water proofing - URP (Agent)',

        ]
      },
      {
        title: 'Electrical',
        details: [
          'Fire proof wire flonex switches',
          'Sockets - Legrard ups wiring',
          'Lights',
          'Fans',
          'Chandeliers',
          'Earthing'
          
        ]
      },
      {
        title: 'Smart Homes',
        details: [
          'Wi-Fi CAT-6',
          'CCTV Camera',
          'Main Gate lock - Smart Lock',
          'Centralized RO fitting',
          'Heat pump',
          'Shoftner'
          
        ]
      }
    ]
  },
  orchid: {
    title: 'LILY',
    price: '₹ 3000/sq.ft',
    color: 'gold' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          'Architectural layout 3D',
          'Elevation  Structural Design',
          '3D Elevations',
          'All Services Drawings - Electrical, Plumbing, Furniture, Centralized AC',
          'Interior Drawings '
        ]
      },
      {
        title: 'Structure',
        details: [
          'Steel- Jindal / TATA/SAIL',
          'Cement - Ultratech/ Ace',
          'Aggregate - 20, 10, 40 mm',
          'Block/ Brick',
          'RCC - Design Mix-7.5 m20,m25',
          'Ceiling Height= 11 feet',
          'Staircase, Balcony, Roof - Railing, Elevation',
          'SS malt finish',
          'False Ceiling',
          'TV wall panelling',
          'Wall moulding desing',
          'Footing - Waterproofing',
        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Main Sink Faucet - upto 10000/-',
          'Kitchen top granite finish, modular Kitchen',
          'SS Kitchen ',
          'Chimney, Fridge',
          'Wall tiles ceramic upto Rs 100 per sqft',
          'Dado tiles upto Rs 125 per sqft',
          'Sink area - Waterproofing',
        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Nitoproof 600 PF Epoxy',
          'Sanitary wear & CPVC Fittings up to Rs 80000/-',
          'CPVC fitting - Astral/Supreme',
          'Doors - waterproof flush doors',
          'Mirror, soap dish, Towel Rail, of Rs - 10000/- geyser. 20 LTS',
          'Sunken Waterproofing - Agent (Pidilite/URP)',
          'Heat grill',
          'Glass partition (Water guard)',
          'Ventilation fan 3"',
          'Overhead water tank SS',
        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'UPVC windows with (3 Track), Fix window - glass 10mm laminated toughened glass',
          'Main doors - Nagpur seasoned teak',
          'Internal doors - flush doors with veneer, frame Sal or  Marandi 4x3)',
          'Door frame - teak wood'
        ]
      },
      {
        title: 'Painting',
        details: [
          'Internal - Wall POP, Primer, Chaak Primer, Royal Emulsion for Ceiling, Velvet touch for walls (Deluxe/Berger)',
          'External - JK putty, Primer waterproofing, Weather shield paint, Texture paint as decided',

        ]
      },
      {
        title: 'Flooring',
        details: [
          'Italian marble for rooms and living area',
          'Kitchen - Ceramic tiles for wall , dado',
          'Kitchen floor - Italian tiles',
          'Fair area - Moraccon tiles',
          'Balcony and Parking - Antiskid tiles',
          'Roof flooring - Moraccon tiles',
          'Garden area and Parking - Paver block, Kota stone',
          'Water proofing - Roof and Balcony',

        ]
      },
      {
        title: 'Electrical',
        details: [
          'Wires (FRLS)',
          'Switches & sockets COMA, Schneider, Havells',
          'UPS wiring, car charging point',
          'Condiut - AKG',
          'Lights, Fans, Chandeliers, Earthing'
        ]
      },
      {
        title: 'Smart Homes',
        details: [
          'Wi-Fi CAT-6',
          'CCTV Camera',
          'Main Gate lock - Smart Lock',
          'Smart switches paired with Alexa',
          'Smart locks (Bluetooth, wifi)',
          'Centralized RO fitting',
          'Shoftner',
          'Heat pump',
          'SS overhead water tank'
        ]
      }
    ]
  }
};

export function Pricing() {
  return (
    <div className="min-h-screen  mt-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Pricing
          </h4>

          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            We offer transparent and competitive pricing tailored to your project’s needs. Get the best value for your investment without compromising on quality or service.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <PricingCard {...pricingData.lilly} />
          <PricingCard {...pricingData.rose} />
          <PricingCard {...pricingData.orchid} />
        </div>
      </div>
    </div>
  );
}