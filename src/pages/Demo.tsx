import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { Leaf, TrendingUp, Users, Shield, FileText, CheckCircle2, AlertCircle, AlertTriangle, Download } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// SEBI BRSR-aligned validation schemas
const environmentSchema = z.object({
  energyConsumption: z.string().min(1, "Energy consumption is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  renewableEnergy: z.string().min(1, "Renewable energy % is required").refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 100;
  }, "Must be between 0-100%"),
  waterConsumption: z.string().min(1, "Water consumption is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  wasteGenerated: z.string().min(1, "Waste generated is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  wasteRecycled: z.string().min(1, "Waste recycled is required").refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 100;
  }, "Must be between 0-100%"),
  scope1Emissions: z.string().min(1, "Scope 1 emissions is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  scope2Emissions: z.string().min(1, "Scope 2 emissions is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  airEmissions: z.string().optional(),
});

const socialSchema = z.object({
  totalEmployees: z.string().min(1, "Total employees is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Must be a positive number"),
  womenEmployees: z.string().min(1, "Women employees % is required").refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 100;
  }, "Must be between 0-100%"),
  employeeTurnover: z.string().min(1, "Employee turnover % is required").refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 100;
  }, "Must be between 0-100%"),
  trainingHours: z.string().min(1, "Training hours is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  safetyIncidents: z.string().min(1, "Safety incidents is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  fatalities: z.string().min(1, "Fatalities count is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  communityInvestment: z.string().min(1, "Community investment is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a positive number"),
  supplyChainAudits: z.string().optional(),
});

const governanceSchema = z.object({
  boardMeetings: z.string().min(1, "Board meetings is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Must be a positive number"),
  independentDirectors: z.string().min(1, "Independent directors % is required").refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 0 && num <= 100;
  }, "Must be between 0-100%"),
  auditCommitteeMeetings: z.string().min(1, "Audit committee meetings is required").refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Must be a positive number"),
  codeOfConduct: z.string().min(1, "Code of conduct status is required"),
  whistleblowerPolicy: z.string().min(1, "Whistleblower policy status is required"),
  antiCorruptionPolicy: z.string().min(1, "Anti-corruption policy status is required"),
  dataPrivacyCompliance: z.string().min(1, "Data privacy compliance status is required"),
  riskManagementFramework: z.string().min(1, "Risk management framework status is required"),
});

type EnvironmentFormData = z.infer<typeof environmentSchema>;
type SocialFormData = z.infer<typeof socialSchema>;
type GovernanceFormData = z.infer<typeof governanceSchema>;

interface ESGData {
  environment: EnvironmentFormData;
  social: SocialFormData;
  governance: GovernanceFormData;
}

const Demo = () => {
  const [activeTab, setActiveTab] = useState("environment");
  
  // Initialize form data with default values
  const defaultEnvironment: EnvironmentFormData = {
    energyConsumption: "",
    renewableEnergy: "",
    waterConsumption: "",
    wasteGenerated: "",
    wasteRecycled: "",
    scope1Emissions: "",
    scope2Emissions: "",
    airEmissions: "",
  };

  const defaultSocial: SocialFormData = {
    totalEmployees: "",
    womenEmployees: "",
    employeeTurnover: "",
    trainingHours: "",
    safetyIncidents: "",
    fatalities: "",
    communityInvestment: "",
    supplyChainAudits: "",
  };

  const defaultGovernance: GovernanceFormData = {
    boardMeetings: "",
    independentDirectors: "",
    auditCommitteeMeetings: "",
    codeOfConduct: "",
    whistleblowerPolicy: "",
    antiCorruptionPolicy: "",
    dataPrivacyCompliance: "",
    riskManagementFramework: "",
  };

  const [esgData, setEsgData] = useState<ESGData>({
    environment: defaultEnvironment,
    social: defaultSocial,
    governance: defaultGovernance,
  });

  // Forms for each section
  const envForm = useForm<EnvironmentFormData>({
    resolver: zodResolver(environmentSchema),
    defaultValues: defaultEnvironment,
  });

  const socForm = useForm<SocialFormData>({
    resolver: zodResolver(socialSchema),
    defaultValues: defaultSocial,
  });

  const govForm = useForm<GovernanceFormData>({
    resolver: zodResolver(governanceSchema),
    defaultValues: defaultGovernance,
  });

  // Load data from sessionStorage on mount
  useEffect(() => {
    const savedData = sessionStorage.getItem("ecotrack_demo_data");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setEsgData(parsed);
        envForm.reset(parsed.environment || defaultEnvironment);
        socForm.reset(parsed.social || defaultSocial);
        govForm.reset(parsed.governance || defaultGovernance);
      } catch (e) {
        console.error("Error loading demo data:", e);
      }
    }
  }, []);

  // Watch form changes and update esgData
  const envWatch = envForm.watch();
  const socWatch = socForm.watch();
  const govWatch = govForm.watch();

  useEffect(() => {
    setEsgData({
      environment: envWatch,
      social: socWatch,
      governance: govWatch,
    });
  }, [envWatch, socWatch, govWatch]);

  // Save data to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("ecotrack_demo_data", JSON.stringify(esgData));
  }, [esgData]);

  const handleEnvSubmit = (data: EnvironmentFormData) => {
    setEsgData((prev) => ({ ...prev, environment: data }));
  };

  const handleSocSubmit = (data: SocialFormData) => {
    setEsgData((prev) => ({ ...prev, social: data }));
  };

  const handleGovSubmit = (data: GovernanceFormData) => {
    setEsgData((prev) => ({ ...prev, governance: data }));
  };

  // Calculate ESG Scores based on SEBI BRSR requirements
  const calculateScores = () => {
    const env = esgData.environment;
    const soc = esgData.social;
    const gov = esgData.governance;

    // Environment Score (0-100) - SEBI BRSR aligned
    let envScore = 0;
    const envMax = 100;
    if (env.energyConsumption && Number(env.energyConsumption) > 0) envScore += 12.5;
    if (env.renewableEnergy && Number(env.renewableEnergy) > 0) envScore += 12.5;
    if (env.waterConsumption && Number(env.waterConsumption) > 0) envScore += 12.5;
    if (env.wasteGenerated && Number(env.wasteGenerated) > 0) envScore += 12.5;
    if (env.wasteRecycled && Number(env.wasteRecycled) > 0) envScore += 12.5;
    if (env.scope1Emissions && Number(env.scope1Emissions) > 0) envScore += 12.5;
    if (env.scope2Emissions && Number(env.scope2Emissions) > 0) envScore += 12.5;
    if (env.airEmissions && env.airEmissions.trim() !== "") envScore += 12.5;

    // Social Score (0-100) - SEBI BRSR aligned
    let socScore = 0;
    if (soc.totalEmployees && Number(soc.totalEmployees) > 0) socScore += 12.5;
    if (soc.womenEmployees && Number(soc.womenEmployees) > 0) socScore += 12.5;
    if (soc.employeeTurnover && Number(soc.employeeTurnover) >= 0) socScore += 12.5;
    if (soc.trainingHours && Number(soc.trainingHours) > 0) socScore += 12.5;
    if (soc.safetyIncidents && Number(soc.safetyIncidents) >= 0) socScore += 12.5;
    if (soc.fatalities && Number(soc.fatalities) >= 0) socScore += 12.5;
    if (soc.communityInvestment && Number(soc.communityInvestment) > 0) socScore += 12.5;
    if (soc.supplyChainAudits && soc.supplyChainAudits.trim() !== "") socScore += 12.5;

    // Governance Score (0-100) - SEBI BRSR aligned
    let govScore = 0;
    if (gov.boardMeetings && Number(gov.boardMeetings) > 0) govScore += 12.5;
    if (gov.independentDirectors && Number(gov.independentDirectors) > 0) govScore += 12.5;
    if (gov.auditCommitteeMeetings && Number(gov.auditCommitteeMeetings) > 0) govScore += 12.5;
    if (gov.codeOfConduct && gov.codeOfConduct.toLowerCase().includes("yes")) govScore += 12.5;
    if (gov.whistleblowerPolicy && gov.whistleblowerPolicy.toLowerCase().includes("yes")) govScore += 12.5;
    if (gov.antiCorruptionPolicy && gov.antiCorruptionPolicy.toLowerCase().includes("yes")) govScore += 12.5;
    if (gov.dataPrivacyCompliance && gov.dataPrivacyCompliance.toLowerCase().includes("yes")) govScore += 12.5;
    if (gov.riskManagementFramework && gov.riskManagementFramework.toLowerCase().includes("yes")) govScore += 12.5;

    // Overall ESG Score (weighted average as per SEBI)
    const overallScore = (envScore * 0.4 + socScore * 0.3 + govScore * 0.3);

    return {
      environment: Math.round(envScore),
      social: Math.round(socScore),
      governance: Math.round(govScore),
      overall: Math.round(overallScore),
    };
  };

  const scores = calculateScores();

  // Prepare chart data
  const esgBreakdownData = [
    { name: "Environment", value: scores.environment, fill: "#10b981" },
    { name: "Social", value: scores.social, fill: "#3b82f6" },
    { name: "Governance", value: scores.governance, fill: "#8b5cf6" },
  ];

  const scoreComparisonData = [
    { category: "Environment", score: scores.environment },
    { category: "Social", score: scores.social },
    { category: "Governance", score: scores.governance },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    if (score >= 40) return "text-orange-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs Improvement";
  };

  const hasAnyData = () => {
    return Object.values(esgData.environment).some(v => v && v.toString().trim() !== "") ||
           Object.values(esgData.social).some(v => v && v.toString().trim() !== "") ||
           Object.values(esgData.governance).some(v => v && v.toString().trim() !== "");
  };

  // Download report function
  const downloadReport = () => {
    if (!hasAnyData()) {
      return;
    }

    const reportDate = new Date().toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    const getScoreColorHex = (score: number) => {
      if (score >= 80) return "#10b981";
      if (score >= 60) return "#eab308";
      if (score >= 40) return "#f97316";
      return "#ef4444";
    };

    // Create HTML content for the report
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ESG Report - EcoTrack India</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      border-bottom: 2px solid #10b981;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #10b981;
      margin: 0;
      font-size: 28px;
    }
    .header p {
      color: #666;
      margin: 5px 0 0 0;
    }
    .score-section {
      background: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    .score-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 15px;
    }
    .score-item {
      text-align: center;
      padding: 15px;
      background: white;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
    }
    .score-value {
      font-size: 32px;
      font-weight: bold;
      margin: 10px 0;
    }
    .data-section {
      margin: 30px 0;
    }
    .data-section h2 {
      color: #1f2937;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 10px;
      margin-bottom: 15px;
    }
    .data-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .data-item {
      padding: 12px;
      background: #f9fafb;
      border-radius: 4px;
      border-left: 3px solid #10b981;
    }
    .data-label {
      font-weight: 600;
      color: #4b5563;
      font-size: 14px;
    }
    .data-value {
      color: #1f2937;
      font-size: 16px;
      margin-top: 4px;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
      font-size: 12px;
    }
    @media print {
      body { padding: 10px; }
      .score-grid { grid-template-columns: repeat(3, 1fr); }
      .data-grid { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>ESG Report - SEBI BRSR Compliant</h1>
    <p>Generated on ${reportDate} | EcoTrack India</p>
  </div>

  <div class="score-section">
    <h2 style="margin-top: 0;">Overall ESG Score</h2>
      <div style="text-align: center; margin: 20px 0;">
        <div class="score-value" style="color: ${getScoreColorHex(scores.overall)}">
          ${scores.overall}/100
        </div>
        <p style="color: #6b7280; margin: 5px 0;">${getScoreLabel(scores.overall)}</p>
      </div>
    <div class="score-grid">
      <div class="score-item">
        <div style="color: #6b7280; font-size: 14px;">Environment</div>
        <div class="score-value" style="color: #10b981;">${scores.environment}</div>
        <div style="color: #6b7280; font-size: 12px;">${getScoreLabel(scores.environment)}</div>
      </div>
      <div class="score-item">
        <div style="color: #6b7280; font-size: 14px;">Social</div>
        <div class="score-value" style="color: #3b82f6;">${scores.social}</div>
        <div style="color: #6b7280; font-size: 12px;">${getScoreLabel(scores.social)}</div>
      </div>
      <div class="score-item">
        <div style="color: #6b7280; font-size: 14px;">Governance</div>
        <div class="score-value" style="color: #8b5cf6;">${scores.governance}</div>
        <div style="color: #6b7280; font-size: 12px;">${getScoreLabel(scores.governance)}</div>
      </div>
    </div>
  </div>

  <div class="data-section">
    <h2>Environmental Data</h2>
    <div class="data-grid">
      ${esgData.environment.energyConsumption ? `
      <div class="data-item">
        <div class="data-label">Energy Consumption</div>
        <div class="data-value">${esgData.environment.energyConsumption} kWh/year</div>
      </div>` : ''}
      ${esgData.environment.renewableEnergy ? `
      <div class="data-item">
        <div class="data-label">Renewable Energy</div>
        <div class="data-value">${esgData.environment.renewableEnergy}%</div>
      </div>` : ''}
      ${esgData.environment.waterConsumption ? `
      <div class="data-item">
        <div class="data-label">Water Consumption</div>
        <div class="data-value">${esgData.environment.waterConsumption} L/year</div>
      </div>` : ''}
      ${esgData.environment.wasteGenerated ? `
      <div class="data-item">
        <div class="data-label">Waste Generated</div>
        <div class="data-value">${esgData.environment.wasteGenerated} kg/year</div>
      </div>` : ''}
      ${esgData.environment.wasteRecycled ? `
      <div class="data-item">
        <div class="data-label">Waste Recycled</div>
        <div class="data-value">${esgData.environment.wasteRecycled}%</div>
      </div>` : ''}
      ${esgData.environment.scope1Emissions ? `
      <div class="data-item">
        <div class="data-label">Scope 1 Emissions</div>
        <div class="data-value">${esgData.environment.scope1Emissions} tCO2e/year</div>
      </div>` : ''}
      ${esgData.environment.scope2Emissions ? `
      <div class="data-item">
        <div class="data-label">Scope 2 Emissions</div>
        <div class="data-value">${esgData.environment.scope2Emissions} tCO2e/year</div>
      </div>` : ''}
      ${esgData.environment.airEmissions ? `
      <div class="data-item">
        <div class="data-label">Air Emissions</div>
        <div class="data-value">${esgData.environment.airEmissions} kg/year</div>
      </div>` : ''}
    </div>
  </div>

  <div class="data-section">
    <h2>Social Data</h2>
    <div class="data-grid">
      ${esgData.social.totalEmployees ? `
      <div class="data-item">
        <div class="data-label">Total Employees</div>
        <div class="data-value">${esgData.social.totalEmployees}</div>
      </div>` : ''}
      ${esgData.social.womenEmployees ? `
      <div class="data-item">
        <div class="data-label">Women Employees</div>
        <div class="data-value">${esgData.social.womenEmployees}%</div>
      </div>` : ''}
      ${esgData.social.employeeTurnover ? `
      <div class="data-item">
        <div class="data-label">Employee Turnover</div>
        <div class="data-value">${esgData.social.employeeTurnover}%</div>
      </div>` : ''}
      ${esgData.social.trainingHours ? `
      <div class="data-item">
        <div class="data-label">Training Hours</div>
        <div class="data-value">${esgData.social.trainingHours} hrs/employee/year</div>
      </div>` : ''}
      ${esgData.social.safetyIncidents ? `
      <div class="data-item">
        <div class="data-label">Safety Incidents</div>
        <div class="data-value">${esgData.social.safetyIncidents} per year</div>
      </div>` : ''}
      ${esgData.social.fatalities ? `
      <div class="data-item">
        <div class="data-label">Fatalities</div>
        <div class="data-value">${esgData.social.fatalities} per year</div>
      </div>` : ''}
      ${esgData.social.communityInvestment ? `
      <div class="data-item">
        <div class="data-label">Community Investment</div>
        <div class="data-value">₹${Number(esgData.social.communityInvestment).toLocaleString()}</div>
      </div>` : ''}
      ${esgData.social.supplyChainAudits ? `
      <div class="data-item">
        <div class="data-label">Supply Chain Audits</div>
        <div class="data-value">${esgData.social.supplyChainAudits}</div>
      </div>` : ''}
    </div>
  </div>

  <div class="data-section">
    <h2>Governance Data</h2>
    <div class="data-grid">
      ${esgData.governance.boardMeetings ? `
      <div class="data-item">
        <div class="data-label">Board Meetings</div>
        <div class="data-value">${esgData.governance.boardMeetings} per year</div>
      </div>` : ''}
      ${esgData.governance.independentDirectors ? `
      <div class="data-item">
        <div class="data-label">Independent Directors</div>
        <div class="data-value">${esgData.governance.independentDirectors}%</div>
      </div>` : ''}
      ${esgData.governance.auditCommitteeMeetings ? `
      <div class="data-item">
        <div class="data-label">Audit Committee Meetings</div>
        <div class="data-value">${esgData.governance.auditCommitteeMeetings} per year</div>
      </div>` : ''}
      ${esgData.governance.codeOfConduct ? `
      <div class="data-item">
        <div class="data-label">Code of Conduct</div>
        <div class="data-value">${esgData.governance.codeOfConduct}</div>
      </div>` : ''}
      ${esgData.governance.whistleblowerPolicy ? `
      <div class="data-item">
        <div class="data-label">Whistleblower Policy</div>
        <div class="data-value">${esgData.governance.whistleblowerPolicy}</div>
      </div>` : ''}
      ${esgData.governance.antiCorruptionPolicy ? `
      <div class="data-item">
        <div class="data-label">Anti-Corruption Policy</div>
        <div class="data-value">${esgData.governance.antiCorruptionPolicy}</div>
      </div>` : ''}
      ${esgData.governance.dataPrivacyCompliance ? `
      <div class="data-item">
        <div class="data-label">Data Privacy Compliance</div>
        <div class="data-value">${esgData.governance.dataPrivacyCompliance}</div>
      </div>` : ''}
      ${esgData.governance.riskManagementFramework ? `
      <div class="data-item">
        <div class="data-label">Risk Management Framework</div>
        <div class="data-value">${esgData.governance.riskManagementFramework}</div>
      </div>` : ''}
    </div>
  </div>

  <div class="footer">
    <p>This report is generated by EcoTrack India - SEBI BRSR Compliant ESG Reporting Platform</p>
    <p>For more information, visit www.ecotrackindia.com</p>
  </div>
</body>
</html>
    `;

    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ESG_Report_${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-8 md:pt-24 md:pb-12 border-b">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                ESG Reporting Demo
              </h1>
              <p className="text-base text-muted-foreground">
                Enter your ESG data as per SEBI BRSR requirements. Generate compliance-ready reports with automated scoring.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Sections */}
        <section className="py-8 bg-background">
          <div className="container-width">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="environment" className="flex items-center gap-2">
                  <Leaf className="w-4 h-4" />
                  Environment
                </TabsTrigger>
                <TabsTrigger value="social" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Social
                </TabsTrigger>
                <TabsTrigger value="governance" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Governance
                </TabsTrigger>
                <TabsTrigger value="report" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Report
                </TabsTrigger>
              </TabsList>

              {/* Environment Section */}
              <TabsContent value="environment" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-green-600" />
                      Environmental Data (SEBI BRSR Mandatory)
                    </CardTitle>
                    <CardDescription>
                      Enter environmental metrics as required by SEBI BRSR framework. All fields marked with * are mandatory.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...envForm}>
                      <form onSubmit={envForm.handleSubmit(handleEnvSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={envForm.control}
                            name="energyConsumption"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Total Energy Consumption (kWh/year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 50000"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Total energy consumed in kilowatt-hours per year</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={envForm.control}
                            name="renewableEnergy"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Renewable Energy Usage (%) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 30"
                                    min="0"
                                    max="100"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Percentage of energy from renewable sources</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={envForm.control}
                            name="waterConsumption"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Water Consumption (Liters/year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 100000"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Total water consumed in liters per year</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={envForm.control}
                            name="wasteGenerated"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Waste Generated (kg/year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 5000"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Total waste generated in kilograms per year</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={envForm.control}
                            name="wasteRecycled"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Waste Recycled (%) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 75"
                                    min="0"
                                    max="100"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Percentage of waste recycled</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={envForm.control}
                            name="scope1Emissions"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Scope 1 GHG Emissions (tCO2e/year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 50"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Direct emissions from owned/controlled sources</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={envForm.control}
                            name="scope2Emissions"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Scope 2 GHG Emissions (tCO2e/year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 30"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Indirect emissions from purchased energy</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={envForm.control}
                            name="airEmissions"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Air Emissions (kg/year)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 1000"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Air pollutants emitted (optional)</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium">Environment Score</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-2xl font-bold ${getScoreColor(scores.environment)}`}>
                                {scores.environment}/100
                              </span>
                              <span className={`text-sm ${getScoreColor(scores.environment)}`}>
                                ({getScoreLabel(scores.environment)})
                              </span>
                            </div>
                          </div>
                          <Button type="submit" className="w-full sm:w-auto">
                            Save Environment Data
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Social Section */}
              <TabsContent value="social" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Social Data (SEBI BRSR Mandatory)
                    </CardTitle>
                    <CardDescription>
                      Enter social metrics as required by SEBI BRSR framework. All fields marked with * are mandatory.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...socForm}>
                      <form onSubmit={socForm.handleSubmit(handleSocSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={socForm.control}
                            name="totalEmployees"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Total Employees *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 150"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Total number of employees</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={socForm.control}
                            name="womenEmployees"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Women Employees (%) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 35"
                                    min="0"
                                    max="100"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Percentage of women in workforce</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={socForm.control}
                            name="employeeTurnover"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Employee Turnover Rate (%) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 10"
                                    min="0"
                                    max="100"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Annual employee turnover percentage</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={socForm.control}
                            name="trainingHours"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Training Hours (per employee/year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 40"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Average training hours per employee per year</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={socForm.control}
                            name="safetyIncidents"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Safety Incidents (per year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 2"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Total number of safety incidents reported</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={socForm.control}
                            name="fatalities"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Fatalities (per year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 0"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Number of workplace fatalities</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={socForm.control}
                            name="communityInvestment"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Community Investment (₹) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 500000"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Total investment in community initiatives</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={socForm.control}
                            name="supplyChainAudits"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Supply Chain Audits (count)</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 10"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Number of supply chain audits conducted (optional)</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium">Social Score</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-2xl font-bold ${getScoreColor(scores.social)}`}>
                                {scores.social}/100
                              </span>
                              <span className={`text-sm ${getScoreColor(scores.social)}`}>
                                ({getScoreLabel(scores.social)})
                              </span>
                            </div>
                          </div>
                          <Button type="submit" className="w-full sm:w-auto">
                            Save Social Data
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Governance Section */}
              <TabsContent value="governance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-600" />
                      Governance Data (SEBI BRSR Mandatory)
                    </CardTitle>
                    <CardDescription>
                      Enter governance metrics as required by SEBI BRSR framework. All fields marked with * are mandatory.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...govForm}>
                      <form onSubmit={govForm.handleSubmit(handleGovSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={govForm.control}
                            name="boardMeetings"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Board Meetings (per year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 12"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Number of board meetings held per year</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={govForm.control}
                            name="independentDirectors"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Independent Directors (%) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 50"
                                    min="0"
                                    max="100"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Percentage of independent directors on board</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={govForm.control}
                            name="auditCommitteeMeetings"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Audit Committee Meetings (per year) *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="number"
                                    placeholder="e.g., 6"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Number of audit committee meetings held per year</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={govForm.control}
                            name="codeOfConduct"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Code of Conduct (Yes/No) *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., Yes"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Whether code of conduct is implemented</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={govForm.control}
                            name="whistleblowerPolicy"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Whistleblower Policy (Yes/No) *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., Yes"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Whether whistleblower policy exists</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={govForm.control}
                            name="antiCorruptionPolicy"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Anti-Corruption Policy (Yes/No) *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., Yes"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Whether anti-corruption policy exists</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={govForm.control}
                            name="dataPrivacyCompliance"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Data Privacy Compliance (Yes/No) *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., Yes"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Compliance with data privacy regulations</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={govForm.control}
                            name="riskManagementFramework"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Risk Management Framework (Yes/No) *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., Yes"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>Whether risk management framework exists</FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium">Governance Score</span>
                            <div className="flex items-center gap-2">
                              <span className={`text-2xl font-bold ${getScoreColor(scores.governance)}`}>
                                {scores.governance}/100
                              </span>
                              <span className={`text-sm ${getScoreColor(scores.governance)}`}>
                                ({getScoreLabel(scores.governance)})
                              </span>
                            </div>
                          </div>
                          <Button type="submit" className="w-full sm:w-auto">
                            Save Governance Data
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Report Section */}
              <TabsContent value="report" className="space-y-6">
                {!hasAnyData() ? (
                  <Card>
                    <CardContent className="py-12 text-center">
                      <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No Data Entered Yet</h3>
                      <p className="text-muted-foreground mb-6">
                        Please enter data in the Environment, Social, and Governance sections to generate your SEBI BRSR-compliant ESG report.
                      </p>
                      <Button onClick={() => setActiveTab("environment")}>
                        Start Entering Data
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    {/* Overall Score Card */}
                    <Card className="border">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-xl">Overall ESG Score</CardTitle>
                            <CardDescription className="mt-1">SEBI BRSR Compliant Rating</CardDescription>
                          </div>
                          <Button 
                            onClick={downloadReport}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Download Report
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center justify-center py-6">
                          <div className={`text-5xl font-bold mb-1 ${getScoreColor(scores.overall)}`}>
                            {scores.overall}
                          </div>
                          <div className="text-lg text-muted-foreground mb-2">/ 100</div>
                          <div className={`text-base font-medium ${getScoreColor(scores.overall)}`}>
                            {getScoreLabel(scores.overall)}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground mb-1">Environment</div>
                            <div className={`text-xl font-bold ${getScoreColor(scores.environment)}`}>
                              {scores.environment}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground mb-1">Social</div>
                            <div className={`text-xl font-bold ${getScoreColor(scores.social)}`}>
                              {scores.social}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground mb-1">Governance</div>
                            <div className={`text-xl font-bold ${getScoreColor(scores.governance)}`}>
                              {scores.governance}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* ESG Breakdown Pie Chart */}
                      <Card className="border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">ESG Score Breakdown</CardTitle>
                          <CardDescription className="text-xs">Distribution across E, S, and G pillars</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              environment: { label: "Environment", color: "#10b981" },
                              social: { label: "Social", color: "#3b82f6" },
                              governance: { label: "Governance", color: "#8b5cf6" },
                            }}
                            className="h-[250px]"
                          >
                            <PieChart>
                              <Pie
                                data={esgBreakdownData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, value }) => `${name}: ${value}`}
                                outerRadius={70}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {esgBreakdownData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                              </Pie>
                              <ChartTooltip content={<ChartTooltipContent />} />
                            </PieChart>
                          </ChartContainer>
                        </CardContent>
                      </Card>

                      {/* Score Comparison Bar Chart */}
                      <Card className="border">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Pillar Comparison</CardTitle>
                          <CardDescription className="text-xs">Score comparison across ESG pillars</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              score: { label: "Score", color: "#3b82f6" },
                            }}
                            className="h-[250px]"
                          >
                            <BarChart data={scoreComparisonData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="category" />
                              <YAxis domain={[0, 100]} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Data Summary */}
                    <Card className="border">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Data Summary</CardTitle>
                        <CardDescription className="text-xs">SEBI BRSR Parameters Overview</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Leaf className="w-4 h-4 text-green-600" />
                              Environment
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {esgData.environment.energyConsumption && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  Energy: {esgData.environment.energyConsumption} kWh/year
                                </li>
                              )}
                              {esgData.environment.waterConsumption && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  Water: {esgData.environment.waterConsumption} L/year
                                </li>
                              )}
                              {esgData.environment.scope1Emissions && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  Scope 1: {esgData.environment.scope1Emissions} tCO2e/year
                                </li>
                              )}
                              {esgData.environment.scope2Emissions && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  Scope 2: {esgData.environment.scope2Emissions} tCO2e/year
                                </li>
                              )}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Users className="w-4 h-4 text-blue-600" />
                              Social
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {esgData.social.totalEmployees && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                  Employees: {esgData.social.totalEmployees}
                                </li>
                              )}
                              {esgData.social.womenEmployees && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                  Women: {esgData.social.womenEmployees}%
                                </li>
                              )}
                              {esgData.social.trainingHours && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                  Training: {esgData.social.trainingHours} hrs/employee
                                </li>
                              )}
                              {esgData.social.communityInvestment && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                  Community: ₹{Number(esgData.social.communityInvestment).toLocaleString()}
                                </li>
                              )}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Shield className="w-4 h-4 text-purple-600" />
                              Governance
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              {esgData.governance.boardMeetings && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                                  Board Meetings: {esgData.governance.boardMeetings}/year
                                </li>
                              )}
                              {esgData.governance.independentDirectors && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                                  Independent Directors: {esgData.governance.independentDirectors}%
                                </li>
                              )}
                              {esgData.governance.codeOfConduct && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                                  Code of Conduct: {esgData.governance.codeOfConduct}
                                </li>
                              )}
                              {esgData.governance.whistleblowerPolicy && (
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                                  Whistleblower Policy: {esgData.governance.whistleblowerPolicy}
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card className="border bg-muted/30">
                      <CardContent className="py-6 text-center">
                        <h3 className="text-lg font-semibold mb-2">Ready for Full Platform Access?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          This is a demo preview. Get complete EcoTrack platform with SEBI BRSR-compliant reporting, 
                          advanced analytics, unlimited reports, and compliance tracking.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button variant="outline" size="sm" asChild>
                            <a href="/pricing">View Pricing</a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href="/contact">Contact Sales</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
