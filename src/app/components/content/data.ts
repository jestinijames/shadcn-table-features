export type FileSystemItem = {
  id: string;
  name: string;
  uniqueStudyId: string;
  studyTitle: string;
  sponsorRepresentative?: string;
  studySpecies?: string;
  projectName?: string;
  fileUploadYear?: string;
  externalAssignedStudyNumber?: string;
  studyMaterialOrMoleculeIdentification?: string;
  studyType?: string;
  regulatoryStandard?: string;
  investigatorName?: string;
  primaryOrganizationName?: string;
  type: "folder" | "file";
  size?: string;
  subRows?: FileSystemItem[];
};

export const fileSystemData: FileSystemItem[] = [
  {
    id: "1",
    name: "ELA195522",
    uniqueStudyId: "ELA195522",
    studyTitle: "Test 20May25",
    sponsorRepresentative: "John Smith",
    studySpecies: "Rat",
    projectName: "Project Alpha",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-001",
    studyMaterialOrMoleculeIdentification: "Compound A",
    studyType: "Toxicology",
    regulatoryStandard: "OECD",
    investigatorName: "Dr. Johnson",
    primaryOrganizationName: "Research Lab Inc",
    type: "folder",
    subRows: [
      {
        id: "1-1",
        name: "Study Reports",
        uniqueStudyId: "ELA195522",
        studyTitle: "Test 20May25",
        type: "folder",
        subRows: [
          {
            id: "1-1-1",
            name: "Final_Report.pdf",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "2.5 MB",
          },
          {
            id: "1-1-2",
            name: "Interim_Report.pdf",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "1.8 MB",
          },
        ],
      },
      {
        id: "1-2",
        name: "Raw Data",
        uniqueStudyId: "ELA195522",
        studyTitle: "Test 20May25",
        type: "folder",
        subRows: [
          {
            id: "1-2-1",
            name: "data_week1.xlsx",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "156 KB",
          },
          {
            id: "1-2-2",
            name: "data_week2.xlsx",
            uniqueStudyId: "ELA195522",
            studyTitle: "Test 20May25",
            type: "file",
            size: "164 KB",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "ELA230838",
    uniqueStudyId: "ELA230838",
    studyTitle: "Cardiovascular Safety Study",
    sponsorRepresentative: "Jane Doe",
    studySpecies: "Dog",
    projectName: "Project Beta",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-002",
    studyMaterialOrMoleculeIdentification: "Compound B",
    studyType: "Safety Pharmacology",
    regulatoryStandard: "ICH",
    investigatorName: "Dr. Williams",
    primaryOrganizationName: "Pharma Research Center",
    type: "folder",
    subRows: [
      {
        id: "2-1",
        name: "Protocol",
        uniqueStudyId: "ELA230838",
        studyTitle: "Cardiovascular Safety Study",
        type: "folder",
        subRows: [
          {
            id: "2-1-1",
            name: "Protocol_v1.0.pdf",
            uniqueStudyId: "ELA230838",
            studyTitle: "Cardiovascular Safety Study",
            type: "file",
            size: "890 KB",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "ELA230839",
    uniqueStudyId: "ELA230839",
    studyTitle: "10 GB File",
    sponsorRepresentative: "Mike Johnson",
    studySpecies: "Mouse",
    projectName: "Project Gamma",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-003",
    studyMaterialOrMoleculeIdentification: "Compound C",
    studyType: "Genotoxicity",
    regulatoryStandard: "OECD",
    investigatorName: "Dr. Brown",
    primaryOrganizationName: "BioTech Solutions",
    type: "folder",
    subRows: [
      {
        id: "3-1",
        name: "ELA230839_CG14...loaded_Item",
        uniqueStudyId: "ELA230839",
        studyTitle: "10 GB File",
        type: "file",
        size: "10 GB",
      },
      {
        id: "3-2",
        name: "Elanco_ELA2308...3_115447.xls",
        uniqueStudyId: "ELA230839",
        studyTitle: "10 GB File",
        type: "file",
        size: "10 GB",
      },
      {
        id: "3-3",
        name: "TimeZone.txt",
        uniqueStudyId: "ELA230839",
        studyTitle: "10 GB File",
        type: "file",
        size: "10 GB",
      },
    ],
  },
  {
    id: "4",
    name: "ELA240901",
    uniqueStudyId: "ELA240901",
    studyTitle: "Efficacy Study of Drug Delta",
    sponsorRepresentative: "Sarah Chen",
    studySpecies: "Human",
    projectName: "Project Delta",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-004",
    studyMaterialOrMoleculeIdentification: "Drug Delta",
    studyType: "Phase III Clinical Trial",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Anderson",
    primaryOrganizationName: "Clinical Research Institute",
    type: "folder",
    subRows: [
      {
        id: "4-1",
        name: "Clinical Data",
        uniqueStudyId: "ELA240901",
        studyTitle: "Efficacy Study of Drug Delta",
        type: "folder",
        subRows: [
          {
            id: "4-1-1",
            name: "patient_data.csv",
            uniqueStudyId: "ELA240901",
            studyTitle: "Efficacy Study of Drug Delta",
            type: "file",
            size: "5.2 MB",
          },
          {
            id: "4-1-2",
            name: "adverse_events.xlsx",
            uniqueStudyId: "ELA240901",
            studyTitle: "Efficacy Study of Drug Delta",
            type: "file",
            size: "1.1 MB",
          },
        ],
      },
      {
        id: "4-2",
        name: "Statistical Analysis",
        uniqueStudyId: "ELA240901",
        studyTitle: "Efficacy Study of Drug Delta",
        type: "folder",
        subRows: [
          {
            id: "4-2-1",
            name: "statistical_plan.pdf",
            uniqueStudyId: "ELA240901",
            studyTitle: "Efficacy Study of Drug Delta",
            type: "file",
            size: "780 KB",
          },
          {
            id: "4-2-2",
            name: "analysis_results.R",
            uniqueStudyId: "ELA240901",
            studyTitle: "Efficacy Study of Drug Delta",
            type: "file",
            size: "45 KB",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "ELA240902",
    uniqueStudyId: "ELA240902",
    studyTitle: "Reproductive Toxicity Assessment",
    sponsorRepresentative: "Robert Taylor",
    studySpecies: "Rabbit",
    projectName: "Project Epsilon",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-005",
    studyMaterialOrMoleculeIdentification: "Compound E",
    studyType: "Reproductive Toxicity",
    regulatoryStandard: "ICH",
    investigatorName: "Dr. Martinez",
    primaryOrganizationName: "Reproductive Health Labs",
    type: "folder",
    subRows: [
      {
        id: "5-1",
        name: "Histopathology",
        uniqueStudyId: "ELA240902",
        studyTitle: "Reproductive Toxicity Assessment",
        type: "folder",
        subRows: [
          {
            id: "5-1-1",
            name: "histopath_report.pdf",
            uniqueStudyId: "ELA240902",
            studyTitle: "Reproductive Toxicity Assessment",
            type: "file",
            size: "15.7 MB",
          },
          {
            id: "5-1-2",
            name: "microscopy_images.zip",
            uniqueStudyId: "ELA240902",
            studyTitle: "Reproductive Toxicity Assessment",
            type: "file",
            size: "245 MB",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "ELA240903",
    uniqueStudyId: "ELA240903",
    studyTitle: "Pharmacokinetic Study of Vaccine F",
    sponsorRepresentative: "Amanda Wilson",
    studySpecies: "Human",
    projectName: "Project Zeta",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-006",
    studyMaterialOrMoleculeIdentification: "Vaccine F",
    studyType: "Phase II Clinical Trial",
    regulatoryStandard: "WHO",
    investigatorName: "Dr. Thompson",
    primaryOrganizationName: "Vaccine Development Center",
    type: "folder",
    subRows: [
      {
        id: "6-1",
        name: "PK Analysis",
        uniqueStudyId: "ELA240903",
        studyTitle: "Pharmacokinetic Study of Vaccine F",
        type: "folder",
        subRows: [
          {
            id: "6-1-1",
            name: "pk_parameters.xlsx",
            uniqueStudyId: "ELA240903",
            studyTitle: "Pharmacokinetic Study of Vaccine F",
            type: "file",
            size: "2.8 MB",
          },
          {
            id: "6-1-2",
            name: "concentration_time_curves.pdf",
            uniqueStudyId: "ELA240903",
            studyTitle: "Pharmacokinetic Study of Vaccine F",
            type: "file",
            size: "3.4 MB",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "ELA240904",
    uniqueStudyId: "ELA240904",
    studyTitle: "Immunogenicity Study of Therapeutic G",
    sponsorRepresentative: "David Rodriguez",
    studySpecies: "Human",
    projectName: "Project Eta",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-007",
    studyMaterialOrMoleculeIdentification: "Therapeutic G",
    studyType: "Immunogenicity Study",
    regulatoryStandard: "EMA",
    investigatorName: "Dr. Garcia",
    primaryOrganizationName: "Immunology Research Lab",
    type: "folder",
    subRows: [
      {
        id: "7-1",
        name: "Immunoassays",
        uniqueStudyId: "ELA240904",
        studyTitle: "Immunogenicity Study of Therapeutic G",
        type: "folder",
        subRows: [
          {
            id: "7-1-1",
            name: "elisa_results.csv",
            uniqueStudyId: "ELA240904",
            studyTitle: "Immunogenicity Study of Therapeutic G",
            type: "file",
            size: "890 KB",
          },
          {
            id: "7-1-2",
            name: "flow_cytometry_data.fcs",
            uniqueStudyId: "ELA240904",
            studyTitle: "Immunogenicity Study of Therapeutic G",
            type: "file",
            size: "125 MB",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    name: "ELA240905",
    uniqueStudyId: "ELA240905",
    studyTitle: "Carcinogenicity Study of Chemical H",
    sponsorRepresentative: "Lisa Lee",
    studySpecies: "Rat",
    projectName: "Project Theta",
    fileUploadYear: "2022",
    externalAssignedStudyNumber: "EXT-008",
    studyMaterialOrMoleculeIdentification: "Chemical H",
    studyType: "Carcinogenicity",
    regulatoryStandard: "OECD",
    investigatorName: "Dr. Miller",
    primaryOrganizationName: "Oncology Research Institute",
    type: "folder",
    subRows: [
      {
        id: "8-1",
        name: "Tumor Analysis",
        uniqueStudyId: "ELA240905",
        studyTitle: "Carcinogenicity Study of Chemical H",
        type: "folder",
        subRows: [
          {
            id: "8-1-1",
            name: "tumor_incidence.xlsx",
            uniqueStudyId: "ELA240905",
            studyTitle: "Carcinogenicity Study of Chemical H",
            type: "file",
            size: "1.5 MB",
          },
          {
            id: "8-1-2",
            name: "pathology_images.zip",
            uniqueStudyId: "ELA240905",
            studyTitle: "Carcinogenicity Study of Chemical H",
            type: "file",
            size: "1.2 GB",
          },
        ],
      },
      {
        id: "8-2",
        name: "Statistical Reports",
        uniqueStudyId: "ELA240905",
        studyTitle: "Carcinogenicity Study of Chemical H",
        type: "folder",
        subRows: [
          {
            id: "8-2-1",
            name: "survival_analysis.pdf",
            uniqueStudyId: "ELA240905",
            studyTitle: "Carcinogenicity Study of Chemical H",
            type: "file",
            size: "3.1 MB",
          },
          {
            id: "8-2-2",
            name: "dose_response.R",
            uniqueStudyId: "ELA240905",
            studyTitle: "Carcinogenicity Study of Chemical H",
            type: "file",
            size: "78 KB",
          },
        ],
      },
    ],
  },
  {
    id: "9",
    name: "ELA240906",
    uniqueStudyId: "ELA240906",
    studyTitle: "Neurotoxicity Assessment of Drug I",
    sponsorRepresentative: "Kevin Harris",
    studySpecies: "Mouse",
    projectName: "Project Iota",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-009",
    studyMaterialOrMoleculeIdentification: "Drug I",
    studyType: "Neurotoxicity",
    regulatoryStandard: "ICH",
    investigatorName: "Dr. Clark",
    primaryOrganizationName: "Neuroscience Research Center",
    type: "folder",
    subRows: [
      {
        id: "9-1",
        name: "Behavioral Studies",
        uniqueStudyId: "ELA240906",
        studyTitle: "Neurotoxicity Assessment of Drug I",
        type: "folder",
        subRows: [
          {
            id: "9-1-1",
            name: "behavior_scores.csv",
            uniqueStudyId: "ELA240906",
            studyTitle: "Neurotoxicity Assessment of Drug I",
            type: "file",
            size: "445 KB",
          },
          {
            id: "9-1-2",
            name: "motor_function_tests.xlsx",
            uniqueStudyId: "ELA240906",
            studyTitle: "Neurotoxicity Assessment of Drug I",
            type: "file",
            size: "678 KB",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    name: "ELA240907",
    uniqueStudyId: "ELA240907",
    studyTitle: "Environmental Fate Study of Pesticide J",
    sponsorRepresentative: "Michelle Davis",
    studySpecies: "Fish",
    projectName: "Project Kappa",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-010",
    studyMaterialOrMoleculeIdentification: "Pesticide J",
    studyType: "Environmental Toxicity",
    regulatoryStandard: "EPA",
    investigatorName: "Dr. Young",
    primaryOrganizationName: "Environmental Science Institute",
    type: "folder",
    subRows: [
      {
        id: "10-1",
        name: "Water Quality Data",
        uniqueStudyId: "ELA240907",
        studyTitle: "Environmental Fate Study of Pesticide J",
        type: "folder",
        subRows: [
          {
            id: "10-1-1",
            name: "water_analysis.xlsx",
            uniqueStudyId: "ELA240907",
            studyTitle: "Environmental Fate Study of Pesticide J",
            type: "file",
            size: "2.1 MB",
          },
          {
            id: "10-1-2",
            name: "bioaccumulation_data.csv",
            uniqueStudyId: "ELA240907",
            studyTitle: "Environmental Fate Study of Pesticide J",
            type: "file",
            size: "890 KB",
          },
        ],
      },
    ],
  },
  {
    id: "11",
    name: "ELA240908",
    uniqueStudyId: "ELA240908",
    studyTitle: "Bioavailability Study of Formulation K",
    sponsorRepresentative: "Thomas Martinez",
    studySpecies: "Human",
    projectName: "Project Lambda",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-011",
    studyMaterialOrMoleculeIdentification: "Formulation K",
    studyType: "Bioequivalence Study",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Taylor",
    primaryOrganizationName: "Pharmaceutical Sciences Lab",
    type: "folder",
    subRows: [
      {
        id: "11-1",
        name: "Plasma Concentration",
        uniqueStudyId: "ELA240908",
        studyTitle: "Bioavailability Study of Formulation K",
        type: "folder",
        subRows: [
          {
            id: "11-1-1",
            name: "plasma_levels.xlsx",
            uniqueStudyId: "ELA240908",
            studyTitle: "Bioavailability Study of Formulation K",
            type: "file",
            size: "3.7 MB",
          },
          {
            id: "11-1-2",
            name: "pharmacokinetic_plots.pdf",
            uniqueStudyId: "ELA240908",
            studyTitle: "Bioavailability Study of Formulation K",
            type: "file",
            size: "2.9 MB",
          },
        ],
      },
    ],
  },
  {
    id: "12",
    name: "ELA240909",
    uniqueStudyId: "ELA240909",
    studyTitle: "Antimicrobial Efficacy of Antibiotic L",
    sponsorRepresentative: "Jennifer Wilson",
    studySpecies: "Human",
    projectName: "Project Mu",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-012",
    studyMaterialOrMoleculeIdentification: "Antibiotic L",
    studyType: "Phase III Clinical Trial",
    regulatoryStandard: "EMA",
    investigatorName: "Dr. Garcia",
    primaryOrganizationName: "Infectious Disease Center",
    type: "folder",
    subRows: [
      {
        id: "12-1",
        name: "Microbiology Data",
        uniqueStudyId: "ELA240909",
        studyTitle: "Antimicrobial Efficacy of Antibiotic L",
        type: "folder",
        subRows: [
          {
            id: "12-1-1",
            name: "mic_values.csv",
            uniqueStudyId: "ELA240909",
            studyTitle: "Antimicrobial Efficacy of Antibiotic L",
            type: "file",
            size: "567 KB",
          },
          {
            id: "12-1-2",
            name: "bacterial_cultures.xlsx",
            uniqueStudyId: "ELA240909",
            studyTitle: "Antimicrobial Efficacy of Antibiotic L",
            type: "file",
            size: "1.8 MB",
          },
        ],
      },
    ],
  },
  {
    id: "13",
    name: "ELA240910",
    uniqueStudyId: "ELA240910",
    studyTitle: "Developmental Toxicity of Compound M",
    sponsorRepresentative: "Christopher Brown",
    studySpecies: "Mouse",
    projectName: "Project Nu",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-013",
    studyMaterialOrMoleculeIdentification: "Compound M",
    studyType: "Developmental Toxicity",
    regulatoryStandard: "ICH",
    investigatorName: "Dr. Lewis",
    primaryOrganizationName: "Developmental Biology Lab",
    type: "folder",
    subRows: [
      {
        id: "13-1",
        name: "Embryo Development",
        uniqueStudyId: "ELA240910",
        studyTitle: "Developmental Toxicity of Compound M",
        type: "folder",
        subRows: [
          {
            id: "13-1-1",
            name: "embryo_measurements.xlsx",
            uniqueStudyId: "ELA240910",
            studyTitle: "Developmental Toxicity of Compound M",
            type: "file",
            size: "1.4 MB",
          },
          {
            id: "13-1-2",
            name: "malformation_images.zip",
            uniqueStudyId: "ELA240910",
            studyTitle: "Developmental Toxicity of Compound M",
            type: "file",
            size: "456 MB",
          },
        ],
      },
    ],
  },
  {
    id: "14",
    name: "ELA240911",
    uniqueStudyId: "ELA240911",
    studyTitle: "Post-Marketing Surveillance of Drug N",
    sponsorRepresentative: "Rachel Anderson",
    studySpecies: "Human",
    projectName: "Project Xi",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-014",
    studyMaterialOrMoleculeIdentification: "Drug N",
    studyType: "Post-Marketing Study",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. White",
    primaryOrganizationName: "Pharmacovigilance Institute",
    type: "folder",
    subRows: [
      {
        id: "14-1",
        name: "Adverse Event Reports",
        uniqueStudyId: "ELA240911",
        studyTitle: "Post-Marketing Surveillance of Drug N",
        type: "folder",
        subRows: [
          {
            id: "14-1-1",
            name: "ae_database.csv",
            uniqueStudyId: "ELA240911",
            studyTitle: "Post-Marketing Surveillance of Drug N",
            type: "file",
            size: "8.3 MB",
          },
          {
            id: "14-1-2",
            name: "safety_summary.pdf",
            uniqueStudyId: "ELA240911",
            studyTitle: "Post-Marketing Surveillance of Drug N",
            type: "file",
            size: "4.7 MB",
          },
        ],
      },
    ],
  },
  {
    id: "15",
    name: "ELA240912",
    uniqueStudyId: "ELA240912",
    studyTitle: "Medical Device Safety Assessment O",
    sponsorRepresentative: "Andrew Thompson",
    studySpecies: "Human",
    projectName: "Project Omicron",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-015",
    studyMaterialOrMoleculeIdentification: "Medical Device O",
    studyType: "Device Safety Study",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Rodriguez",
    primaryOrganizationName: "Medical Device Research Center",
    type: "folder",
    subRows: [
      {
        id: "15-1",
        name: "Device Performance",
        uniqueStudyId: "ELA240912",
        studyTitle: "Medical Device Safety Assessment O",
        type: "folder",
        subRows: [
          {
            id: "15-1-1",
            name: "performance_metrics.xlsx",
            uniqueStudyId: "ELA240912",
            studyTitle: "Medical Device Safety Assessment O",
            type: "file",
            size: "2.6 MB",
          },
          {
            id: "15-1-2",
            name: "user_feedback.csv",
            uniqueStudyId: "ELA240912",
            studyTitle: "Medical Device Safety Assessment O",
            type: "file",
            size: "789 KB",
          },
        ],
      },
    ],
  },
  {
    id: "16",
    name: "ELA240913",
    uniqueStudyId: "ELA240913",
    studyTitle: "Probiotic Efficacy Study P",
    sponsorRepresentative: "Stephanie Garcia",
    studySpecies: "Human",
    projectName: "Project Pi",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-016",
    studyMaterialOrMoleculeIdentification: "Probiotic P",
    studyType: "Phase II Clinical Trial",
    regulatoryStandard: "EMA",
    investigatorName: "Dr. Clark",
    primaryOrganizationName: "Gastroenterology Research Lab",
    type: "folder",
    subRows: [
      {
        id: "16-1",
        name: "Microbiome Analysis",
        uniqueStudyId: "ELA240913",
        studyTitle: "Probiotic Efficacy Study P",
        type: "folder",
        subRows: [
          {
            id: "16-1-1",
            name: "16s_sequencing.fastq",
            uniqueStudyId: "ELA240913",
            studyTitle: "Probiotic Efficacy Study P",
            type: "file",
            size: "2.8 GB",
          },
          {
            id: "16-1-2",
            name: "taxonomy_analysis.xlsx",
            uniqueStudyId: "ELA240913",
            studyTitle: "Probiotic Efficacy Study P",
            type: "file",
            size: "5.4 MB",
          },
        ],
      },
    ],
  },
  {
    id: "17",
    name: "ELA240914",
    uniqueStudyId: "ELA240914",
    studyTitle: "Ocular Toxicity Study of Chemical Q",
    sponsorRepresentative: "Marcus Johnson",
    studySpecies: "Rabbit",
    projectName: "Project Rho",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-017",
    studyMaterialOrMoleculeIdentification: "Chemical Q",
    studyType: "Ocular Toxicity",
    regulatoryStandard: "OECD",
    investigatorName: "Dr. Harris",
    primaryOrganizationName: "Ophthalmology Research Institute",
    type: "folder",
    subRows: [
      {
        id: "17-1",
        name: "Eye Examination Data",
        uniqueStudyId: "ELA240914",
        studyTitle: "Ocular Toxicity Study of Chemical Q",
        type: "folder",
        subRows: [
          {
            id: "17-1-1",
            name: "corneal_opacity_scores.xlsx",
            uniqueStudyId: "ELA240914",
            studyTitle: "Ocular Toxicity Study of Chemical Q",
            type: "file",
            size: "890 KB",
          },
          {
            id: "17-1-2",
            name: "histopathology_slides.zip",
            uniqueStudyId: "ELA240914",
            studyTitle: "Ocular Toxicity Study of Chemical Q",
            type: "file",
            size: "678 MB",
          },
        ],
      },
    ],
  },
  {
    id: "18",
    name: "ELA240915",
    uniqueStudyId: "ELA240915",
    studyTitle: "Nutritional Supplement Study R",
    sponsorRepresentative: "Tiffany Wilson",
    studySpecies: "Human",
    projectName: "Project Sigma",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-018",
    studyMaterialOrMoleculeIdentification: "Supplement R",
    studyType: "Nutritional Study",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Young",
    primaryOrganizationName: "Nutrition Research Center",
    type: "folder",
    subRows: [
      {
        id: "18-1",
        name: "Biomarker Analysis",
        uniqueStudyId: "ELA240915",
        studyTitle: "Nutritional Supplement Study R",
        type: "folder",
        subRows: [
          {
            id: "18-1-1",
            name: "vitamin_levels.csv",
            uniqueStudyId: "ELA240915",
            studyTitle: "Nutritional Supplement Study R",
            type: "file",
            size: "1.3 MB",
          },
          {
            id: "18-1-2",
            name: "metabolomic_profile.xlsx",
            uniqueStudyId: "ELA240915",
            studyTitle: "Nutritional Supplement Study R",
            type: "file",
            size: "4.1 MB",
          },
        ],
      },
    ],
  },
  {
    id: "19",
    name: "ELA240916",
    uniqueStudyId: "ELA240916",
    studyTitle: "Dermal Safety Assessment of Cosmetic S",
    sponsorRepresentative: "Angela Brown",
    studySpecies: "Human",
    projectName: "Project Tau",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-019",
    studyMaterialOrMoleculeIdentification: "Cosmetic S",
    studyType: "Dermal Safety Study",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Martinez",
    primaryOrganizationName: "Dermatology Research Institute",
    type: "folder",
    subRows: [
      {
        id: "19-1",
        name: "Skin Irritation Tests",
        uniqueStudyId: "ELA240916",
        studyTitle: "Dermal Safety Assessment of Cosmetic S",
        type: "folder",
        subRows: [
          {
            id: "19-1-1",
            name: "irritation_scores.xlsx",
            uniqueStudyId: "ELA240916",
            studyTitle: "Dermal Safety Assessment of Cosmetic S",
            type: "file",
            size: "567 KB",
          },
          {
            id: "19-1-2",
            name: "patch_test_photos.zip",
            uniqueStudyId: "ELA240916",
            studyTitle: "Dermal Safety Assessment of Cosmetic S",
            type: "file",
            size: "234 MB",
          },
        ],
      },
    ],
  },
  {
    id: "20",
    name: "ELA240917",
    uniqueStudyId: "ELA240917",
    studyTitle: "Gene Therapy Efficacy Study T",
    sponsorRepresentative: "Nathan Rodriguez",
    studySpecies: "Human",
    projectName: "Project Upsilon",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-020",
    studyMaterialOrMoleculeIdentification: "Gene Therapy T",
    studyType: "Phase I Clinical Trial",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Thompson",
    primaryOrganizationName: "Gene Therapy Institute",
    type: "folder",
    subRows: [
      {
        id: "20-1",
        name: "Genetic Analysis",
        uniqueStudyId: "ELA240917",
        studyTitle: "Gene Therapy Efficacy Study T",
        type: "folder",
        subRows: [
          {
            id: "20-1-1",
            name: "gene_expression.csv",
            uniqueStudyId: "ELA240917",
            studyTitle: "Gene Therapy Efficacy Study T",
            type: "file",
            size: "12.7 MB",
          },
          {
            id: "20-1-2",
            name: "sequencing_data.fastq",
            uniqueStudyId: "ELA240917",
            studyTitle: "Gene Therapy Efficacy Study T",
            type: "file",
            size: "5.6 GB",
          },
        ],
      },
    ],
  },
  {
    id: "21",
    name: "ELA240918",
    uniqueStudyId: "ELA240918",
    studyTitle: "Antiviral Drug Study U",
    sponsorRepresentative: "Monica Lewis",
    studySpecies: "Human",
    projectName: "Project Phi",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-021",
    studyMaterialOrMoleculeIdentification: "Antiviral U",
    studyType: "Phase II Clinical Trial",
    regulatoryStandard: "WHO",
    investigatorName: "Dr. Wilson",
    primaryOrganizationName: "Virology Research Center",
    type: "folder",
    subRows: [
      {
        id: "21-1",
        name: "Viral Load Data",
        uniqueStudyId: "ELA240918",
        studyTitle: "Antiviral Drug Study U",
        type: "folder",
        subRows: [
          {
            id: "21-1-1",
            name: "pcr_results.csv",
            uniqueStudyId: "ELA240918",
            studyTitle: "Antiviral Drug Study U",
            type: "file",
            size: "3.2 MB",
          },
          {
            id: "21-1-2",
            name: "viral_kinetics.xlsx",
            uniqueStudyId: "ELA240918",
            studyTitle: "Antiviral Drug Study U",
            type: "file",
            size: "1.9 MB",
          },
        ],
      },
    ],
  },
  {
    id: "22",
    name: "ELA240919",
    uniqueStudyId: "ELA240919",
    studyTitle: "Hormone Replacement Study V",
    sponsorRepresentative: "Gregory Anderson",
    studySpecies: "Human",
    projectName: "Project Chi",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-022",
    studyMaterialOrMoleculeIdentification: "Hormone V",
    studyType: "Phase III Clinical Trial",
    regulatoryStandard: "EMA",
    investigatorName: "Dr. Miller",
    primaryOrganizationName: "Endocrinology Research Lab",
    type: "folder",
    subRows: [
      {
        id: "22-1",
        name: "Hormone Levels",
        uniqueStudyId: "ELA240919",
        studyTitle: "Hormone Replacement Study V",
        type: "folder",
        subRows: [
          {
            id: "22-1-1",
            name: "baseline_hormones.xlsx",
            uniqueStudyId: "ELA240919",
            studyTitle: "Hormone Replacement Study V",
            type: "file",
            size: "2.1 MB",
          },
          {
            id: "22-1-2",
            name: "follow_up_levels.csv",
            uniqueStudyId: "ELA240919",
            studyTitle: "Hormone Replacement Study V",
            type: "file",
            size: "1.7 MB",
          },
        ],
      },
    ],
  },
  {
    id: "23",
    name: "ELA240920",
    uniqueStudyId: "ELA240920",
    studyTitle: "Inhalation Toxicity Study W",
    sponsorRepresentative: "Stephanie Johnson",
    studySpecies: "Rat",
    projectName: "Project Psi",
    fileUploadYear: "2023",
    externalAssignedStudyNumber: "EXT-023",
    studyMaterialOrMoleculeIdentification: "Aerosol W",
    studyType: "Inhalation Toxicity",
    regulatoryStandard: "OECD",
    investigatorName: "Dr. Lee",
    primaryOrganizationName: "Respiratory Toxicology Lab",
    type: "folder",
    subRows: [
      {
        id: "23-1",
        name: "Lung Function Tests",
        uniqueStudyId: "ELA240920",
        studyTitle: "Inhalation Toxicity Study W",
        type: "folder",
        subRows: [
          {
            id: "23-1-1",
            name: "spirometry_data.xlsx",
            uniqueStudyId: "ELA240920",
            studyTitle: "Inhalation Toxicity Study W",
            type: "file",
            size: "1.6 MB",
          },
          {
            id: "23-1-2",
            name: "bronchial_lavage.csv",
            uniqueStudyId: "ELA240920",
            studyTitle: "Inhalation Toxicity Study W",
            type: "file",
            size: "890 KB",
          },
        ],
      },
    ],
  },
  {
    id: "24",
    name: "ELA240921",
    uniqueStudyId: "ELA240921",
    studyTitle: "Biomarker Validation Study X",
    sponsorRepresentative: "Daniel Martinez",
    studySpecies: "Human",
    projectName: "Project Omega",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-024",
    studyMaterialOrMoleculeIdentification: "Biomarker X",
    studyType: "Biomarker Study",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Davis",
    primaryOrganizationName: "Biomarker Research Institute",
    type: "folder",
    subRows: [
      {
        id: "24-1",
        name: "Proteomics Data",
        uniqueStudyId: "ELA240921",
        studyTitle: "Biomarker Validation Study X",
        type: "folder",
        subRows: [
          {
            id: "24-1-1",
            name: "protein_expression.csv",
            uniqueStudyId: "ELA240921",
            studyTitle: "Biomarker Validation Study X",
            type: "file",
            size: "15.3 MB",
          },
          {
            id: "24-1-2",
            name: "mass_spec_data.raw",
            uniqueStudyId: "ELA240921",
            studyTitle: "Biomarker Validation Study X",
            type: "file",
            size: "3.8 GB",
          },
        ],
      },
    ],
  },
  {
    id: "25",
    name: "ELA240922",
    uniqueStudyId: "ELA240922",
    studyTitle: "Combination Therapy Study Y",
    sponsorRepresentative: "Crystal Wilson",
    studySpecies: "Human",
    projectName: "Project Alpha-Beta",
    fileUploadYear: "2024",
    externalAssignedStudyNumber: "EXT-025",
    studyMaterialOrMoleculeIdentification: "Combination Y",
    studyType: "Phase II Clinical Trial",
    regulatoryStandard: "FDA",
    investigatorName: "Dr. Garcia",
    primaryOrganizationName: "Clinical Research Center",
    type: "folder",
    subRows: [
      {
        id: "25-1",
        name: "Efficacy Analysis",
        uniqueStudyId: "ELA240922",
        studyTitle: "Combination Therapy Study Y",
        type: "folder",
        subRows: [
          {
            id: "25-1-1",
            name: "response_rates.xlsx",
            uniqueStudyId: "ELA240922",
            studyTitle: "Combination Therapy Study Y",
            type: "file",
            size: "2.4 MB",
          },
          {
            id: "25-1-2",
            name: "survival_curves.pdf",
            uniqueStudyId: "ELA240922",
            studyTitle: "Combination Therapy Study Y",
            type: "file",
            size: "1.8 MB",
          },
        ],
      },
      {
        id: "25-2",
        name: "Safety Data",
        uniqueStudyId: "ELA240922",
        studyTitle: "Combination Therapy Study Y",
        type: "folder",
        subRows: [
          {
            id: "25-2-1",
            name: "adverse_events.csv",
            uniqueStudyId: "ELA240922",
            studyTitle: "Combination Therapy Study Y",
            type: "file",
            size: "3.1 MB",
          },
          {
            id: "25-2-2",
            name: "lab_abnormalities.xlsx",
            uniqueStudyId: "ELA240922",
            studyTitle: "Combination Therapy Study Y",
            type: "file",
            size: "1.5 MB",
          },
        ],
      },
    ],
  },
];
