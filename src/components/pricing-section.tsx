import PricingCard from './blocks/pricing-section';

const pricingData = {
  lilly: {
    title: 'ROSE',
    price: '₹ 1900/sq.ft (incl. GST)',
    color: 'blue' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          'Designs & Diagram',
          'Architectural Layout 2D',
          'Basic Elevation Structural Design',
          'Elevation 30',
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
          'RCC, Desigen mix 120/m25%',
          'PCC - 47.5',
          'Ceiling height - 11 FT, (Finish floored to Roof Level)'

        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Ceramic wall dado, upto Rs. 40 per sqft, Main sink faucet upto Rs 1500',
          'Any othe faucet or Accessories 11 -ISI marked',
          'Kitchen Sink- S.S. Worth Rs 4000'
        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Ceremic wall dado upto 7" height Rs-40/Sqft',
          'Sanitary ware up to 30,000 per 100 sqft. of Cera or Hindware make',
          'CPVC pipe APL Apollo or Equivalent',
          'Bathroom doors - Waterproof flush door'

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
          'JK putti + Tractor Emulsion or quivalent',
          'External Asian primer + Ace emulsion paint or equivalent'
        ]
      },
      {
        title: 'Flooring',
        details: [
          'Living & Dinning Flooring - Tiles of - value up to Rs 60 per sqft',
          'Rooms & Kitchen flooring - Tiles of Rs.50 per sqft',
          'Balcony, open area flooring - Antiskide tiles of Rs. 40 per sqft',
          'Stair case flooring - Granite of value Rs75 per sqft',
          'Parking tiles- Antiskid tiles or checked tiles / paver block'

        ]
      },
      {
        title: 'Electrical',
        details: [
          'Wire - fire proof wire by Finolex',
          'Switches & sockets - legards or equivalent'
        ]
      }
    ]
  },
  rose: {
    title: 'ORCHID',
    price: '₹ 2200/sq.ft (incl. GST)',
    color: 'orange' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          'Architectural layout - 2D. Basic elevation',
          'Structural Design 3D elevation',
          'Electrical Drawings',
          'Plumbing Drawings'

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
          'Celing height 11 feet  ( FFL TO FFL )'

        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Ceramic wall dado upto Rs. 80 sqft',
          'Main Sink. faucet - upto Rs- 4000/-',
          'Any of the faucet or Accessores ISI Mark',
          'Kitchen counter of Granite finish'

        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Ceremic wall dado 7" height. upto Rs. 60 per sqft',
          'Sanitaryware & cpvc fitting up to Rs. 45000 per sqft of Jaguar make',
          'CPVC pipe - Apl Apollo, or similar',
          'Doors - waterproof flush doors',
          'Mirror, soap dish, towel rail, worth Rs. 7000 & water heater'

        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'UPVC windows (3 Track, 5mm glass thickness)',
          'Teak Door frame with Teak doors worth - Rs. 15000/-',
          'Internal doors flush doors (32mm) with laminates, (Door frame- Marandi or Sal)'

        ]
      },
      {
        title: 'Painting',
        details: [
          'Internal painting',
          'Emulsion, JK pulty, Apcalite premium',
          'External - Asian Apex Emulsion'

        ]
      },
      {
        title: 'Flooring',
        details: [
          'Living & Dinning flooring - Tiles or granite or marble up to Rs 120 per sqft',
          'Rooms, Kitchen,Living Area,Balcony & Open Area- Rs.100 per sqft. anti skid tiles of value Rs.80 per sqft',
          'Staircase, Flooring Granite upto Rs 100 per sqft.',
          'Parking Anti Skid tiles / Kota Stone / Paver Block'

        ]
      },
      {
        title: 'Electrical',
        details: [
          'Fire proof wire flonex switches',
          'Sockets - Legrard ups wiring'
        ]
      }
    ]
  },
  orchid: {
    title: 'LILY',
    price: '₹ 2600/sq.ft (incl. GST)',
    color: 'gold' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          'Architectural layout 2D',
          'Basic Elevation  Structural Design',
          '3D Elevations',
          'Electrical Drawing',
          'Plumbing Drawing',
          'Furniture Plan'
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
          'Ceiling Height= 11 feet'
        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Main Sink Faucet - upto 4000/-',
          'Kitchen Sink of S.S. granite finish, modular Kitchen',
          'Water Proofing Nitoproof 600 PF Epoxy'
        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Nitoproof 600 PF Epoxy',
          'Sanitarycrare & CPVC Fittings up to Rs 80000/- Kohler, Jaguar make',
          'CPVC pepe - APL Apollo',
          'Doors - waterproof flush doors',
          'Mirror, soap dish, Towel Rail, of Rs - 10000/- geyser. 20 LTS'
        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'UPVC windows with (3 Track). of fenesta make',
          'Main doors - Teak wood frame',
          'Teak Doors (5x3.5)',
          'Internal doors - flush doors, with laminates, frame Sal or  Marandi 4x3)'
        ]
      },
      {
        title: 'Painting',
        details: [
          '3K putty',
          'Royale Luxury, Emulsion or similar',
          'External Asian Primer, Apex ultima. External Emulsion Paint or similar'

        ]
      },
      {
        title: 'Flooring',
        details: [
          'Living+ Dinning Flooring - Tiles or Granitel Or Marble of Rs- 180/SQFT or Italian Tiles',
          'Room + Kitchen - Tiles or Granite or marbles. of Rs. 140/SQFT'
        ]
      },
      {
        title: 'Electrical',
        details: [
          'Overhead water tank. 2000 Lt',
          'Wires - Fireproof - Finolex',
          'Switches & sockets Legrand, Schneider, Havells',
          'UPS wiring, charging 1 EV charging Point at G.F'
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