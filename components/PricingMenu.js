import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, DollarSign, Warehouse, Truck, Box,
  ChevronDown, ChevronUp, Info
} from 'lucide-react';

const PricingMenu = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const pricingData = [
    {
      category: "Receiving",
      icon: <Truck size={24} className="text-sky-400" />,
      services: [
        {
          name: "Container Unloading",
          range: "$300-$750",
          details: "Per container, varies by size and type"
        },
        {
          name: "Pallet Receiving",
          range: "$4-$15",
          details: "Per pallet"
        },
        {
          name: "Individual Items",
          range: "$0.25-$2",
          details: "Per item received"
        }
      ]
    },
    {
      category: "Storage",
      icon: <Warehouse size={24} className="text-sky-400" />,
      services: [
        {
          name: "Pallet Storage",
          range: "$8-$40",
          details: "Per pallet per month"
        },
        {
          name: "Bin Storage",
          range: "$1-$5",
          details: "Per bin per month"
        },
        {
          name: "Special Storage",
          range: "Custom",
          details: "Climate-controlled, FTZ, etc."
        }
      ]
    },
    {
      category: "Pick & Pack",
      icon: <Box size={24} className="text-sky-400" />,
      services: [
        {
          name: "B2B Pick & Pack",
          range: "$3-$5",
          details: "Per order processing"
        },
        {
          name: "B2C Pick & Pack",
          range: "$1-$3",
          details: "Per order processing"
        },
        {
          name: "Additional Items",
          range: "$0.25-$0.75",
          details: "Per additional item in order"
        }
      ]
    },
    {
      category: "Shipping",
      icon: <Truck size={24} className="text-sky-400" />,
      services: [
        {
          name: "Standard Shipping",
          range: "Carrier + 10-15%",
          details: "Markup on carrier rates"
        },
        {
          name: "Express Shipping",
          range: "Carrier + 8-12%",
          details: "Markup on carrier rates"
        },
        {
          name: "International",
          range: "Custom",
          details: "Based on destination and service"
        }
      ]
    },
    {
      category: "Additional Services",
      icon: <Package size={24} className="text-sky-400" />,
      services: [
        {
          name: "Kitting",
          range: "$0.25-$2",
          details: "Per item in kit"
        },
        {
          name: "Returns Processing",
          range: "$2-$5",
          details: "Per returned item"
        },
        {
          name: "Custom Packaging",
          range: "Cost + 10-20%",
          details: "Markup on materials"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-sky-400 mb-4">
            Quetico 3PL Services Price Guide
          </h1>
        </motion.div>

        {/* Pricing Categories */}
        <div className="space-y-4">
          {pricingData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-white hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center">
                  {category.icon}
                  <span className="ml-3 text-lg font-semibold">{category.category}</span>
                </div>
                {expandedCategory === index ? <ChevronUp /> : <ChevronDown />}
              </button>

              <AnimatePresence>
                {expandedCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <div className="grid gap-4">
                      {category.services.map((service, serviceIndex) => (
                        <motion.div
                          key={service.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: serviceIndex * 0.1 }}
                          className="bg-slate-700 p-4 rounded-lg"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white font-medium">{service.name}</h3>
                            <span className="text-sky-400 font-bold">{service.range}</span>
                          </div>
                          <p className="text-gray-400 text-sm">{service.details}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>* Prices may vary based on volume, complexity, and specific requirements</p>
          <p>Contact us for a custom quote tailored to your needs</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingMenu;
