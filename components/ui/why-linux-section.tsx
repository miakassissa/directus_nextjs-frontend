import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Flag, Check, Cloud, Users, Laptop, BookOpen, Globe, Brain, GitBranch, Briefcase, DollarSign, WifiOff, AlertTriangle, Clock, HardDrive } from 'lucide-react'

const WhyLinuxSection = () => {

  return (
    <section id="why-linux" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="mb-16"></div>
          <h2 className="text-5xl font-extrabold mb-10 text-center">Why Linux Cloud?</h2>
          <div className="mb-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="mr-2" /> Cloud-Native
                </CardTitle>
              </CardHeader>
              <CardContent>
              Linux is the foundation of cloud computing, powering most servers and containerized applications.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2" /> AI/ML Ready
                </CardTitle>
              </CardHeader>
              <CardContent>
              Linux provides the perfect environment for developing and deploying AI and machine learning models.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Laptop className="mr-2" /> Command-line Power
                </CardTitle>
              </CardHeader>
              <CardContent>
              Master the command-line interface for efficient system management and automation.
              </CardContent>
            </Card>
          </div>
          <div className="mb-20"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> Boost Your Career
                </CardTitle>
              </CardHeader>
              <CardContent>
              Linux skills open doors to high-demand tech roles in cloud computing, cybersecurity, and more.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" /> Open Source
                </CardTitle>
              </CardHeader>
              <CardContent>
                Linux's open-source nature allows for customization and optimization in AI/ML environments.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="mr-2" /> Kubernetes & Containers
                </CardTitle>
              </CardHeader>
              <CardContent>
                Linux is the foundation for container technologies like Docker and Kubernetes, crucial for AI/ML deployments.
              </CardContent>
            </Card>
          </div>
          <div className="mb-20"></div>
        </div>
      </section>
  );
    
};

export default WhyLinuxSection;