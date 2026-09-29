import React from "react";
import {
  Building2,
  Code2,
  PenTool,
  MapPin,
  Cpu,
  BarChart3,
  Shield,
  Compass,
  Layers,
  GitBranch,
  Database,
  Settings,
} from "lucide-react";
import "./FloatingIcons.css";

const ICONS = [
  { Icon: Building2, className: "fi fi-1" },
  { Icon: Code2, className: "fi fi-2" },
  { Icon: PenTool, className: "fi fi-3" },
  { Icon: MapPin, className: "fi fi-4" },
  { Icon: Cpu, className: "fi fi-5" },
  { Icon: BarChart3, className: "fi fi-6" },
  { Icon: Shield, className: "fi fi-7" },
  { Icon: Compass, className: "fi fi-8" },
  { Icon: Layers, className: "fi fi-9" },
  { Icon: GitBranch, className: "fi fi-10" },
  { Icon: Database, className: "fi fi-11" },
  { Icon: Settings, className: "fi fi-12" },
];

const FloatingIcons = () => (
  <div className="floating-icons-layer" aria-hidden="true">
{ICONS.map((item) => (
          <span key={item.className} className={item.className}>
            <item.Icon size={28} strokeWidth={1.4} />
          </span>
        ))}
  </div>
);

export default FloatingIcons;
