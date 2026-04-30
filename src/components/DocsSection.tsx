import { BookOpen, Code, FileText, Rocket, Terminal, Wrench } from "lucide-react";
import { useState } from "react";

const docCategories = [
  {
    id: "getting-started",
    icon: Rocket,
    title: "Getting Started",
    items: [
      { title: "Quick Start Guide", desc: "Get HydroFlow up and running in under 5 minutes with our step-by-step setup guide." },
      { title: "System Requirements", desc: "Minimum hardware and software requirements for running HydroFlow on your infrastructure." },
      { title: "Installation", desc: "Detailed installation instructions for all supported platforms including Docker and native installs." },
    ],
  },
  {
    id: "api-reference",
    icon: Code,
    title: "API Reference",
    items: [
      { title: "REST API Overview", desc: "Full reference for HydroFlow's RESTful API including authentication, endpoints, and rate limits." },
      { title: "WebSocket Streams", desc: "Real-time data streaming via WebSocket connections for live monitoring dashboards." },
      { title: "Webhooks", desc: "Configure event-driven webhooks to integrate HydroFlow alerts with your existing tools." },
    ],
  },
  {
    id: "configuration",
    icon: Wrench,
    title: "Configuration",
    items: [
      { title: "Sensor Setup", desc: "Pair and calibrate water quality sensors, flow meters, and environmental monitors." },
      { title: "Alert Rules", desc: "Define custom alert thresholds for pH, turbidity, flow anomalies, and more." },
      { title: "User Permissions", desc: "Role-based access control setup for teams and organizations." },
    ],
  },
  {
    id: "guides",
    icon: BookOpen,
    title: "Guides & Tutorials",
    items: [
      { title: "Building Custom Dashboards", desc: "Create tailored monitoring dashboards with drag-and-drop widgets and custom data queries." },
      { title: "Automation Recipes", desc: "Pre-built automation templates for common water management scenarios." },
      { title: "Data Export & Reporting", desc: "Generate compliance reports and export historical data in CSV, JSON, or PDF formats." },
    ],
  },
];

export function DocsSection() {
  const [active, setActive] = useState("getting-started");
  const activeCategory = docCategories.find((c) => c.id === active)!;

  return (
    <section id="docs" className="py-24 bg-elevated/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-4">
            <FileText className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs text-primary font-medium">Documentation</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Product <span className="text-gradient">Documentation</span>
          </h2>
          <p className="text-muted-foreground">
            Everything you need to integrate, configure, and get the most out of HydroFlow.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 max-w-5xl mx-auto">
          {/* Sidebar */}
          <div className="space-y-1">
            {docCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm transition-all ${
                  active === cat.id
                    ? "bg-primary/15 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent"
                }`}
              >
                <cat.icon className="h-4 w-4 shrink-0" />
                {cat.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <activeCategory.icon className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-semibold text-foreground">{activeCategory.title}</h3>
            </div>
            {activeCategory.items.map((item) => (
              <div
                key={item.title}
                className="glass-card rounded-lg p-5 hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <Terminal className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
