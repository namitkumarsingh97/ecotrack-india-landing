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
import { Leaf, TrendingUp, Users, Shield, FileText, CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-background to-section-alt">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-green-light border border-accent/20 mb-6">
                <Leaf className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">SEBI BRSR-Aligned Demo</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Experience <span className="text-primary">EcoTrack</span> Platform
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Enter your ESG data as per SEBI BRSR requirements and see how EcoTrack generates comprehensive, compliance-ready reports with scores and visualizations.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Sections */}
        <section className="section-padding bg-background">
          <div className="container-width">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
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
                    <Card className="border-2 border-primary">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          Overall ESG Score (SEBI BRSR Compliant)
                        </CardTitle>
                        <CardDescription>
                          Your comprehensive ESG performance rating based on SEBI BRSR framework
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col items-center justify-center py-8">
                          <div className={`text-6xl font-bold mb-2 ${getScoreColor(scores.overall)}`}>
                            {scores.overall}
                          </div>
                          <div className="text-2xl text-muted-foreground mb-4">/ 100</div>
                          <div className={`text-lg font-semibold ${getScoreColor(scores.overall)}`}>
                            {getScoreLabel(scores.overall)}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground mb-1">Environment</div>
                            <div className={`text-2xl font-bold ${getScoreColor(scores.environment)}`}>
                              {scores.environment}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground mb-1">Social</div>
                            <div className={`text-2xl font-bold ${getScoreColor(scores.social)}`}>
                              {scores.social}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground mb-1">Governance</div>
                            <div className={`text-2xl font-bold ${getScoreColor(scores.governance)}`}>
                              {scores.governance}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Charts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* ESG Breakdown Pie Chart */}
                      <Card>
                        <CardHeader>
                          <CardTitle>ESG Score Breakdown</CardTitle>
                          <CardDescription>Distribution across E, S, and G pillars</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              environment: { label: "Environment", color: "#10b981" },
                              social: { label: "Social", color: "#3b82f6" },
                              governance: { label: "Governance", color: "#8b5cf6" },
                            }}
                            className="h-[300px]"
                          >
                            <PieChart>
                              <Pie
                                data={esgBreakdownData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, value }) => `${name}: ${value}`}
                                outerRadius={80}
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
                      <Card>
                        <CardHeader>
                          <CardTitle>Pillar Comparison</CardTitle>
                          <CardDescription>Score comparison across ESG pillars</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ChartContainer
                            config={{
                              score: { label: "Score", color: "#3b82f6" },
                            }}
                            className="h-[300px]"
                          >
                            <BarChart data={scoreComparisonData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="category" />
                              <YAxis domain={[0, 100]} />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="score" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                            </BarChart>
                          </ChartContainer>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Data Summary */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Data Summary (SEBI BRSR Parameters)</CardTitle>
                        <CardDescription>Overview of entered ESG metrics as per SEBI BRSR framework</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                      <CardContent className="py-8 text-center">
                        <h3 className="text-2xl font-bold mb-2">Ready for the Full Experience?</h3>
                        <p className="text-primary-foreground/90 mb-6">
                          This is just a preview. Get the complete EcoTrack platform with SEBI BRSR-compliant reporting, 
                          advanced analytics, unlimited reports, and compliance tracking.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button variant="secondary" size="lg" asChild>
                            <a href="/pricing">View Pricing</a>
                          </Button>
                          <Button 
                            size="lg" 
                            className="bg-white text-primary hover:bg-white/90 border-2 border-white font-semibold shadow-lg" 
                            asChild
                          >
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
