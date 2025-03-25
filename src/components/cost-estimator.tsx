'use client';
import React, { useState, useMemo, useCallback } from 'react';
import { Calculator, Building2 } from 'lucide-react';

const CONSTRUCTION_PLANS = {
    basic: { 
      name: 'ROSE', 
      rate: 1900,
      features: [
        'Ceramic wall dado in kitchen & bathroom (₹40/sqft)',
        'Steel: Prime gold, Kamdhenu or equivalent',
        'Cement: Birla, ACC, or equivalent',
        'Basic elevation & 2D architectural layout',
        'Granite kitchen counter'
      ]
    },
    premium: { 
      name: 'ORCHID', 
      rate: 2200,
      features: [
        'Steel: Jindal + Rathi',
        'Cement: ACC',
        '3D elevation & electrical & plumbing drawings',
        'UPVC windows (3 track, 5mm glass)',
        'Italian tiles or marble flooring (₹180/sqft)'
      ]
    },
    luxury: { 
      name: 'LILY', 
      rate: 2800,
      features: [
        'Steel: Jindal / TATA / SAIL',
        'Cement: Ultratech / Ace',
        '3D elevations, furniture plan & plumbing drawings',
        'UPVC windows (Fenesta make)'
      ]
    },
    smartHome: { 
      name: 'Smart Home', 
      rate: 3200,
      features: [
        'Designer Paint', 
        'IoT Integration', 
        'Home Automation',
        'Smart Locks'
      ]
    }
  };
  

const GST_RATE = 0.18;

// Memoized Plan Card Component
const PlanCard = React.memo(({ 
  plan, 
  planKey, 
  isSelected, 
  onSelect 
}: { 
  plan: typeof CONSTRUCTION_PLANS[keyof typeof CONSTRUCTION_PLANS];
  planKey: string;
  isSelected: boolean;
  onSelect: (key: string) => void;
}) => (
  <div
    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
      isSelected
        ? 'bg-indigo-50 ring-2 ring-indigo-500'
        : 'bg-white hover:bg-indigo-50/50 ring-1 ring-gray-200'
    }`}
    onClick={() => onSelect(planKey)}
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
      <span className="text-indigo-600 font-medium">₹{plan.rate}/sq ft</span>
    </div>
    <ul className="space-y-2">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-slate-600">
          <span className="mr-2">•</span> {feature}
        </li>
      ))}
    </ul>
  </div>
));

PlanCard.displayName = 'PlanCard';

// Memoized Cost Breakdown Component
const CostBreakdown = React.memo(({ 
  baseCost, 
  subtotal, 
  gst, 
  totalCost 
}: { 
  baseCost: number;
  subtotal: number;
  gst: number;
  totalCost: number;
}) => (
  <div className="mt-10 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-violet-50/50 p-8">
    <h2 className="text-2xl font-semibold text-slate-800 mb-6">Cost Breakdown</h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center py-3 border-b border-slate-200">
        <span className="text-slate-600">Base Construction Cost</span>
        <span className="text-lg font-medium text-slate-800">₹{baseCost.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-slate-200">
        <span className="text-slate-600">Subtotal</span>
        <span className="text-lg font-medium text-slate-800">₹{subtotal.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center py-3 border-b border-slate-200">
        <span className="text-slate-600">GST (18%)</span>
        <span className="text-lg font-medium text-slate-800">₹{gst.toLocaleString()}</span>
      </div>
      <div className="flex justify-between items-center pt-4">
        <span className="text-xl font-semibold text-slate-900">Total Cost</span>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
          ₹{totalCost.toLocaleString()}
        </span>
      </div>
    </div>
  </div>
));

CostBreakdown.displayName = 'CostBreakdown';

function CostEstimator() {
  const [plotSize, setPlotSize] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [showResult, setShowResult] = useState(false);

  const handlePlanSelect = useCallback((planKey: string) => {
    setSelectedPlan(planKey);
  }, []);

  const { baseCost, subtotal, gst, totalCost } = useMemo(() => {
    if (!showResult) return { baseCost: 0, subtotal: 0, gst: 0, totalCost: 0 };

    const size = parseFloat(plotSize);
    const planRate = CONSTRUCTION_PLANS[selectedPlan as keyof typeof CONSTRUCTION_PLANS].rate;
    
    const baseCost = size * planRate;
    const subtotal = baseCost;
    const gst = subtotal * GST_RATE;
    const totalCost = subtotal + gst;

    return { baseCost, subtotal, gst, totalCost };
  }, [plotSize, selectedPlan, showResult]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-14 h-14 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-black bg-gradient-to-r from-indigo-600 to-violet-500 mb-4">
            Construction Cost Estimator
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Design your perfect space with our comprehensive cost estimation tool
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-indigo-100/50 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-2">
              <label htmlFor="plotSize" className="block text-sm font-medium text-slate-700">
                Plot Size (sq ft)
              </label>
              <input
                type="number"
                id="plotSize"
                value={plotSize}
                onChange={(e) => setPlotSize(e.target.value)}
                className="w-full px-4 h-14 rounded-2xl border-0 bg-white shadow-sm ring-1 ring-inset ring-gray-200 
                          focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-lg transition-shadow"
                placeholder="Enter plot size"
                required
                min="100"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700 mb-4">
                Select Construction Plan
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(CONSTRUCTION_PLANS).map(([key, plan]) => (
                  <PlanCard
                    key={key}
                    plan={plan}
                    planKey={key}
                    isSelected={selectedPlan === key}
                    onSelect={handlePlanSelect}
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-indigo-600 to-violet-500 text-white rounded-2xl 
                        hover:from-indigo-500 hover:to-violet-400 transition-all duration-300 flex items-center 
                        justify-center space-x-2 text-lg font-medium shadow-lg shadow-indigo-200"
            >
              <Calculator className="w-6 h-6" />
              <span>Calculate Total Cost</span>
            </button>
          </form>

          {showResult && (
            <CostBreakdown
              baseCost={baseCost}
              subtotal={subtotal}
              gst={gst}
              totalCost={totalCost}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CostEstimator;