import PricingCard from './blocks/pricing-section';

const pricingData = {
  lilly: {
    title: 'LILLY',
    price: '₹ 2600/sq.ft (incl. GST)',
    color: 'gold' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          '2D Floor Plans',
          '3D Elevations',
          'Structural Drawings',
          'Electrical Layout',
          'Plumbing Layout'
        ]
      },
      {
        title: 'Structure',
        details: [
          'RCC Frame Structure',
          'AAC Blocks for Walls',
          'Anti-termite Treatment',
          'Waterproofing Treatment'
        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Modular Kitchen with Accessories',
          'Granite Platform',
          'Ceramic Tile Backsplash',
          'SS Sink with Drain Board'
        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Premium Sanitary Ware',
          'Designer Tiles up to Ceiling',
          'Premium CP Fittings',
          'Shower Enclosure'
        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'Teak Wood Main Door',
          'Factory-made Flush Doors',
          'UPVC Windows with Mesh',
          'Premium Hardware Fittings'
        ]
      },
      {
        title: 'Painting',
        details: [
          'Premium Emulsion for Interior',
          'Weather-proof Exterior Paint',
          'Enamel Paint for Grills',
          'PU Polish for Wood Work'
        ]
      },
      {
        title: 'Flooring',
        details: [
          'Vitrified Tiles in Living & Dining',
          'Wooden Flooring in Bedrooms',
          'Anti-skid Tiles in Bathrooms',
          'Granite Flooring in Balconies'
        ]
      },
      {
        title: 'Electrical',
        details: [
          'Modular Switches',
          'Copper Wiring',
          'TV & Telephone Points',
          'AC Points in all Bedrooms'
        ]
      },
      {
        title: 'Miscellaneous',
        details: [
          '24x7 Power Backup',
          'Fire Safety Systems',
          'CCTV Surveillance',
          'Intercom Facility'
        ]
      }
    ]
  },
  rose: {
    title: 'ROSE',
    price: '₹ 1900/sq.ft (incl. GST)',
    color: 'blue' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          '2D Floor Plans',
          '3D Elevations',
          'Basic Structural Drawings',
          'Electrical Layout'
        ]
      },
      {
        title: 'Structure',
        details: [
          'RCC Frame Structure',
          'Red Bricks for Walls',
          'Basic Anti-termite Treatment',
          'Standard Waterproofing'
        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Standard Modular Kitchen',
          'Granite Platform',
          'Ceramic Tile Backsplash',
          'SS Sink'
        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Standard Sanitary Ware',
          'Ceramic Tiles up to Ceiling',
          'Standard CP Fittings',
          'Shower Curtain Rod'
        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'Engineered Wood Main Door',
          'Flush Doors',
          'Aluminum Windows with Mesh',
          'Standard Hardware'
        ]
      },
      {
        title: 'Painting',
        details: [
          'Standard Emulsion Paint',
          'Exterior Paint',
          'Enamel Paint for Grills',
          'Polish for Wood Work'
        ]
      },
      {
        title: 'Flooring',
        details: [
          'Vitrified Tiles Throughout',
          'Anti-skid Tiles in Bathrooms',
          'Ceramic Tiles in Balconies'
        ]
      },
      {
        title: 'Electrical',
        details: [
          'Standard Switches',
          'Copper Wiring',
          'Basic TV & Telephone Points',
          'AC Points in Master Bedroom'
        ]
      },
      {
        title: 'Miscellaneous',
        details: [
          'Power Backup for Common Areas',
          'Basic Fire Safety',
          'Security System',
          'Door Bell'
        ]
      }
    ]
  },
  orchid: {
    title: 'ORCHID',
    price: '₹ 2200/sq.ft (incl. GST)',
    color: 'orange' as const,
    features: [
      {
        title: 'Designs & Drawings',
        details: [
          '2D Floor Plans',
          '3D Elevations with Walkthrough',
          'Detailed Structural Drawings',
          'MEP Layouts'
        ]
      },
      {
        title: 'Structure',
        details: [
          'RCC Frame Structure',
          'AAC Blocks for Walls',
          'Comprehensive Anti-termite',
          'Premium Waterproofing'
        ]
      },
      {
        title: 'Kitchen',
        details: [
          'Premium Modular Kitchen',
          'Imported Granite Platform',
          'Designer Tile Backsplash',
          'Double Bowl SS Sink'
        ]
      },
      {
        title: 'Bathroom',
        details: [
          'Luxury Sanitary Ware',
          'Imported Tiles up to Ceiling',
          'Premium CP Fittings',
          'Glass Shower Enclosure'
        ]
      },
      {
        title: 'Doors & Windows',
        details: [
          'Customized Main Door',
          'Premium Flush Doors',
          'UPVC Windows with Mesh',
          'Imported Hardware'
        ]
      },
      {
        title: 'Painting',
        details: [
          'Premium Emulsion Paint',
          'Textured Exterior Paint',
          'Premium Enamel Paint',
          'Italian PU Polish'
        ]
      },
      {
        title: 'Flooring',
        details: [
          'Premium Vitrified Tiles',
          'Laminated Wooden Flooring',
          'Designer Bathroom Tiles',
          'Premium Balcony Tiles'
        ]
      },
      {
        title: 'Electrical',
        details: [
          'Designer Modular Switches',
          'Copper Wiring',
          'Multiple TV & Phone Points',
          'AC Points Throughout'
        ]
      },
      {
        title: 'Miscellaneous',
        details: [
          '100% Power Backup',
          'Advanced Fire Safety',
          'Smart Home Features',
          'Video Door Phone'
        ]
      }
    ]
  }
};

export function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Choose Your Perfect Package
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our carefully curated packages designed to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <PricingCard {...pricingData.lilly} />
          <PricingCard {...pricingData.rose} />
          <PricingCard {...pricingData.orchid} />
        </div>
      </div>
    </div>
  );
}