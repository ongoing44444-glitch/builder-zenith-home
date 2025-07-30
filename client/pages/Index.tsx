import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Wrench,
  Hammer,
  Settings,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  X,
} from "lucide-react";

export default function Index() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Background images for hero slideshow
  const backgroundImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F64910f5e6ccf4354be8639a3ad8057c9?format=webp&width=800", // Glass canopy
    "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2149adf08ada47b398131ea2a046f488?format=webp&width=800", // Curved glass canopy
    "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F432087cef5554bb4b142a6a6fbdbbae1?format=webp&width=800", // Glass structure
    "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Faf8cccee4d074e2aafb8da70c009dd3d?format=webp&width=800", // Contemporary pergola
    "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F118eb5eff41242429222fe38f801f676?format=webp&width=800", // Professional fabrication
    "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fdc9bece1f14d4ebca222aeb6f4c98947?format=webp&width=800", // Outdoor patio pergola
    "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F98a1f71969a64fe184704e1110a47f17?format=webp&width=800", // Contemporary outdoor living
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Lightbox navigation functions
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0
          ? galleryImages.length - 1
          : selectedImageIndex - 1,
      );
    }
  };
  const services = [
    {
      icon: Building2,
      title: "Engineering",
      description:
        "Comprehensive engineering solutions from concept to completion with precision and innovation.",
    },
    {
      icon: Settings,
      title: "Architecture",
      description:
        "Architectural design and planning services that blend functionality with aesthetic excellence.",
    },
    {
      icon: Hammer,
      title: "Contractor Services",
      description:
        "Full-service construction and project management for commercial and industrial projects.",
    },
    {
      icon: Wrench,
      title: "Metal Fabrication",
      description:
        "Custom metal fabrication with advanced techniques and precision craftsmanship.",
    },
  ];

  const projects = [
    {
      title: "Glass Canopy Installation",
      category: "Engineering & Construction",
      description:
        "Precision-engineered glass canopy with steel framework providing weather protection and architectural elegance.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F64910f5e6ccf4354be8639a3ad8057c9?format=webp&width=800",
    },
    {
      title: "Custom Steel Railings",
      category: "Metal Fabrication",
      description:
        "Handcrafted decorative steel railings featuring intricate metalwork and professional powder coating finish.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc0f46828ded845dba0228eb782b27cce?format=webp&width=800",
    },
    {
      title: "Modern Pergola Structure",
      category: "Architecture",
      description:
        "Contemporary steel pergola with clean lines and integrated lighting for residential outdoor living space.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Faf8cccee4d074e2aafb8da70c009dd3d?format=webp&width=800",
    },
    {
      title: "Geometric Wall Installation",
      category: "Metal Fabrication",
      description:
        "Custom geometric metal wall panels with precision-cut patterns creating modern architectural interest.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2f277abb42a34738bd438e639dd1560d?format=webp&width=800",
    },
    {
      title: "Industrial Workshop Setup",
      category: "Engineering & Construction",
      description:
        "Complete fabrication workshop design and installation with precision equipment and workflow optimization.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F118eb5eff41242429222fe38f801f676?format=webp&width=800",
    },
    {
      title: "Custom Metal Gates",
      category: "Metal Fabrication",
      description:
        "Ornate decorative metal gates with traditional craftsmanship and modern security features.",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F5c3cccda2c964fe1b4f6332b434a4197?format=webp&width=800",
    },
  ];

  const galleryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F64910f5e6ccf4354be8639a3ad8057c9?format=webp&width=800",
      title: "Glass Canopy with Steel Framework",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2d6b00ceae514338b8303104e730f500?format=webp&width=800",
      title: "Modern Interior Metal Panels",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2149adf08ada47b398131ea2a046f488?format=webp&width=800",
      title: "Curved Glass Canopy Installation",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F432087cef5554bb4b142a6a6fbdbbae1?format=webp&width=800",
      title: "Glass Structure Framework",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc0f46828ded845dba0228eb782b27cce?format=webp&width=800",
      title: "Custom Steel Railings",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2f277abb42a34738bd438e639dd1560d?format=webp&width=800",
      title: "Geometric Wall Art Installation",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Faf8cccee4d074e2aafb8da70c009dd3d?format=webp&width=800",
      title: "Contemporary Pergola Design",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F118eb5eff41242429222fe38f801f676?format=webp&width=800",
      title: "Professional Fabrication Shop",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F5c3cccda2c964fe1b4f6332b434a4197?format=webp&width=800",
      title: "Custom Metal Security Gates",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fcb02c5ebc08e4a9eac14c936848b2cba?format=webp&width=800",
      title: "Precision Welding Workspace",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fdc9bece1f14d4ebca222aeb6f4c98947?format=webp&width=800",
      title: "Outdoor Patio Pergola",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fef919a7dbff94c1b92013e4a2006488e?format=webp&width=800",
      title: "Modern Outdoor Structure",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc855061b3aca44da87bfc4d7be66a56d?format=webp&width=800",
      title: "Custom Steel Railing System",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fac308ac676eb4be79257d69be393a684?format=webp&width=800",
      title: "Metal Fabrication Workshop",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F8ff60d9cb30247d2abd0610ff25853a4?format=webp&width=800",
      title: "Professional Steel Crafting",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fd062b6fe3810472aa482f677bb091f74?format=webp&width=800",
      title: "Rooftop Steel Framework",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F052acd210093429bb826718ec24790c9?format=webp&width=800",
      title: "Architectural Curved Windows",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fbc91e725df5a4a3e8472c1fb5df385ba?format=webp&width=800",
      title: "Residential Patio Cover",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fcaff0b14d7af4911966a5bfc41b38046?format=webp&width=800",
      title: "Custom Metal Fencing",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F94aaf8b7868f47d9abe8afd80b050fc6?format=webp&width=800",
      title: "Decorative Metal Screens",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F45dda13074c2448980eefe65447395d8?format=webp&width=800",
      title: "Modern Balcony Railings",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F6c1efba423bd4d91acd1a6165fc274c5?format=webp&width=800",
      title: "Glass Panel Installation",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc3e2ccb1de9e47fb9322715325d23655?format=webp&width=800",
      title: "Precision Metalwork Table",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F3ecae24a00d14011b8c1e2fc8363a089?format=webp&width=800",
      title: "Custom Glass Tables",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F80eb10fdcf424f5fb24e19ac7883fb2b?format=webp&width=800",
      title: "Ventilation Screen System",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F4fa7cf0411b443b09eee9dc51cb4bc8d?format=webp&width=800",
      title: "Curved Steel Railings",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F6d4bd56069ba432db91aaee0509dbc4c?format=webp&width=800",
      title: "Glass Panel Garage Doors",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F6dc5cc41a67e424791507ef303631a5d?format=webp&width=800",
      title: "Steel Framework Construction",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F79559f67ab0946bfa86c4afaebebc495?format=webp&width=800",
      title: "High-End Kitchen Design",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F3a5c90fcd6384c91a1b4b7162765e36b?format=webp&width=800",
      title: "Curved Steel Installation",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F9a5683f6031741f0a5d14a808dbbd98a?format=webp&width=800",
      title: "Metal Structural Components",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F98a1f71969a64fe184704e1110a47f17?format=webp&width=800",
      title: "Contemporary Outdoor Living",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F329d70b19a4d48d0bdbaf219f5a4eeff?format=webp&width=800",
      title: "Decorative Steel Work",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F1affd1251966441a936dfb7e1f15d901?format=webp&width=800",
      title: "Industrial Equipment Fabrication",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2ab83313530441e6a80a409f947190a1?format=webp&width=800",
      title: "Custom Steel Furniture",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2074f418cd0f4767a9fb4e472c161da1?format=webp&width=800",
      title: "Professional Workspace Setup",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F6b112f03b0e541bd9eedc1b6b559ba41?format=webp&width=800",
      title: "Team in Action",
      category: "Contractor Services",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F5f2005876f7b4299abbbfe95fd6ada6c?format=webp&width=800",
      title: "Glass Structure Installation",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F3f575339b9454b50a8759d6f34dc396a?format=webp&width=800",
      title: "Modern Glass Railing",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Ff55be2847e2b4cc09de7210b6d186a76?format=webp&width=800",
      title: "Pergola Installation Process",
      category: "Contractor Services",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F41b1a8ffed544d56998484a805e5da21?format=webp&width=800",
      title: "Modern Entrance Design",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F264213bdc36c410793585eb47b62af9a?format=webp&width=800",
      title: "Steel Security Screens",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2b9910d60311465283bff64fb169ff06?format=webp&width=800",
      title: "Contemporary Vertical Panels",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fb3f34ef6e1ef4b4eb79087f323c83bf2?format=webp&width=800",
      title: "Steel Beam Installation",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fe5972c5b134446d19390e73ce972746f?format=webp&width=800",
      title: "Workshop Team Photo",
      category: "Contractor Services",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F8072d042178e44bc9cd99e5ee4e10995?format=webp&width=800",
      title: "Glass Installation Work",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc4fcd4e9f7e04677a8bd4590c6e19d0e?format=webp&width=800",
      title: "Professional Team Member",
      category: "Contractor Services",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Ff0c268c18d6f46e9b5dc11442b7c9a61?format=webp&width=800",
      title: "Steel Fabrication Assembly",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fe3588aa0b08f445986b0242367f99444?format=webp&width=800",
      title: "Large Scale Installation",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fa49ef18b074145caac76c45c74c96525?format=webp&width=800",
      title: "Stainless Steel Table",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F4ec94012a55c4842930d360c87d69bee?format=webp&width=800",
      title: "Contemporary Interior Design",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Ff275d834508a46d5bdd0a08989a758ac?format=webp&width=800",
      title: "Artisan Metalwork",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fdfc8336a107a4ff4a21b9df977ce6091?format=webp&width=800",
      title: "Decorative Candle Sconces",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2ca6202cd70d44849ea35057c2cf2189?format=webp&width=800",
      title: "Commercial Reception Design",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F51db8583d2dd4409afa391964999d47d?format=webp&width=800",
      title: "Steel Project Framework",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F47b79be43cda48ddb2b3811e04c69900?format=webp&width=800",
      title: "Custom Metal Mailbox",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc9ec58b95dd746708c70bcefc80cabb4?format=webp&width=800",
      title: "Curved Steel Counter",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fcac857430ad043e2b69f65940562ac0b?format=webp&width=800",
      title: "Metal Surface Finishing",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc44f210b8ff54ea19185accd9233848e?format=webp&width=800",
      title: "Gold Metal Accents",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F65b4d984ab6d459ebfe9da5a7835e58d?format=webp&width=800",
      title: "Glass Coffee Table",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F4421a18ba0da4917bf7f8ce672b1f4bc?format=webp&width=800",
      title: "Metal Patio Gates",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F01059f3bcc39471abe9ba7e6cda6000e?format=webp&width=800",
      title: "Artistic Metal Design",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2882f1efe326470d950a9d649a1c5c9b?format=webp&width=800",
      title: "Vertical Steel Panels",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fa6a7354f34b041b8af0c17306d0ef691?format=webp&width=800",
      title: "Elegant Steel Columns",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F1231b821ef31474182b5e3f0fd2503bb?format=webp&width=800",
      title: "Precision Tool Work",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fd08615853c9840f8981c4eab398734c9?format=webp&width=800",
      title: "Geometric Steel Framework",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F314a7411047244179f69d042b41ba651?format=webp&width=800",
      title: "Modern Stainless Steel Vanity",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F1a7d28ab450548dabc6f4ced2c68edb3?format=webp&width=800",
      title: "Curved Metal Railing",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fe37c64d6d192445ba5733805b7756535?format=webp&width=800",
      title: "Textured Gold Panels",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fe0e5c118784a4b5abd314c1f4a172975?format=webp&width=800",
      title: "Modern Privacy Screen",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fc8a577a459b145aba483639164c71079?format=webp&width=800",
      title: "Workshop in Action",
      category: "Contractor Services",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F6eb67adbf1b548df99c14b54d574cca2?format=webp&width=800",
      title: "Steel Table Manufacturing",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F788c5e013d154ef78fd2cc946e1b3746?format=webp&width=800",
      title: "Structural Engineering",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F851f6d1ca2904599a5e79eab3c548fa1?format=webp&width=800",
      title: "Black Steel Frame Structure",
      category: "Engineering & Construction",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Ff57c515c7e1547d185fcba3313c516da?format=webp&width=800",
      title: "Stainless Steel Countertop",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Fa5119d4925104f9490a3a5774fff093d?format=webp&width=800",
      title: "Dark Metal Panels",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F04e1d0c024fd4a138ccb762c8073f1c5?format=webp&width=800",
      title: "Metal Gate with Vertical Slats",
      category: "Metal Fabrication",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2F2b851548463d4a7c99c20c067751ed20?format=webp&width=800",
      title: "Sliding Metal Screen Doors",
      category: "Architecture",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F97362307ccab46c98277148464a25b24%2Ff2817b48d3c64219916e8df619db8705?format=webp&width=800",
      title: "Outdoor Gate Installation",
      category: "Contractor Services",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-red-600">
                  Ferrari Arts
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => scrollToSection("contact")}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 lg:py-32 pb-32 transition-all duration-1000 ease-in-out overflow-hidden"
        style={{
          backgroundImage: `url('${backgroundImages[currentBgIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excellence in <span className="text-red-500">Engineering</span> &{" "}
              <span className="text-red-500">Fabrication</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Ferrari Arts delivers precision engineering, innovative
              architecture, and superior metal fabrication services for
              commercial and industrial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3 z-30"
                onClick={() => setIsGalleryOpen(true)}
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 z-30"
                onClick={() => scrollToSection("contact")}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Background Slideshow Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBgIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBgIndex
                  ? "bg-red-500 scale-110 shadow-lg"
                  : "bg-white opacity-50 hover:opacity-75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across engineering, architecture,
              construction, and metal fabrication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-0 shadow-md"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise across diverse industrial and commercial
              projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-slate-200 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-red-100 text-red-800"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Ferrari Arts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With decades of combined experience in engineering,
                architecture, and metal fabrication, Ferrari Arts has
                established itself as a trusted partner for complex commercial
                and industrial projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Licensed and insured professionals
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Project management expertise
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Quality assurance guarantee
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    On-time project delivery
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Ferrari Arts?
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Comprehensive Expertise
                  </h4>
                  <p className="text-gray-600">
                    From initial design to final installation, we handle every
                    aspect of your project.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Quality Materials
                  </h4>
                  <p className="text-gray-600">
                    We use only the finest materials and proven construction
                    methods.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    B2B Focus
                  </h4>
                  <p className="text-gray-600">
                    Specialized in serving commercial and industrial clients
                    with complex requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Contact us today for a consultation and detailed project quote
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-3" />
                  <span>info@ferrariarts.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-red-500 mr-3" />
                  <span>123 Industrial Blvd, Manufacturing District</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="text-gray-300 space-y-1">
                  <div>Monday - Friday: 7:00 AM - 6:00 PM</div>
                  <div>Saturday: 8:00 AM - 4:00 PM</div>
                  <div>Sunday: Emergency services only</div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll get back to you within
                    24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Company Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Textarea
                    placeholder="Project Description - Please include project type, timeline, and any specific requirements"
                    rows={4}
                  />
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-red-500 mb-4">
                Ferrari Arts
              </h3>
              <p className="text-gray-300 mb-4">
                Excellence in engineering, architecture, contractor services,
                and metal fabrication for commercial and industrial clients.
              </p>
              <p className="text-sm text-gray-400">
                Licensed • Insured • Trusted
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Engineering</li>
                <li>Architecture</li>
                <li>Contractor Services</li>
                <li>Metal Fabrication</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-red-500 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="hover:text-red-500 transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-red-500 transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ferrari Arts. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Our Work Gallery
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsGalleryOpen(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to enlarge
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {image.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-red-100 text-red-800"
                    >
                      {image.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-60 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-70"
            >
              <X className="h-8 w-8" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-70"
            >
              <ArrowRight className="h-8 w-8 rotate-180" />
            </Button>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-70"
            >
              <ArrowRight className="h-8 w-8" />
            </Button>

            {/* Main Image */}
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold mb-1">
                  {galleryImages[selectedImageIndex].title}
                </h3>
                <Badge variant="secondary" className="bg-red-600 text-white">
                  {galleryImages[selectedImageIndex].category}
                </Badge>
                <p className="text-sm mt-2 opacity-75">
                  Image {selectedImageIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
