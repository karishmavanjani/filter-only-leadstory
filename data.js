let result;
//take the var data and its
let data = [
	{
		"state": "Alabama",
		"population": "353,913",
		"percentage_tested": "8%",
		"law": "Alabama offers a Lead hazard Reduction Contractor Certification prgram for  all persons engaged in lead-based paint activities. It's $300 for each child occupied facility plus 2% of the contract."
  },
	{
		"state": "Alaska",
		"population": "64,894",
		"percentage_tested": "No available data",
		"law": "State of Alaska received $355,958 in 2018 for childhood lead poisoning prevention programmatic activities from the Centers for Disease Control and Prevention."
  },
	{
		"state": "Arizona",
		"population": "526,368",
		"percentage_tested": "11%",
		"law": "Arizona requires reporting by physicians of blood/lead above 25 μg/dL."
  },
	{
		"state": "Arkansas",
		"population": "231,143",
		"percentage_tested": "No available data",
		"law": "Arkansas has a  screening program to identify children under 6 years with lead poisoning or potential lead poisoning; poisoned children are to be tested within 3 months."
  },
	{
		"state": "California",
		"population": "3,007,336",
		"percentage_tested": "No available data",
		"law": "California requires reporting by medical laboratories of EBL( elevated blood lead) over 25 μg/dL (may be lowered to 15 μg/dL)."
  },
	{
		"state": "Colorado",
		"population": "406,560",
		"percentage_tested": "7%",
		"law": "Colorado guidelines currently recommend that all low-income children in Colorado should be tested for lead at 12 months and 24 months of age."
  },
	{
		"state": "Connecticut",
		"population": "230,924",
		"percentage_tested": "32%",
		"law": "All clinical laboratories must report blood lead levels of equal to or greater than 10 µg/dl of blood within forty-eight hours of analysis."
  },
	{
		"state": "Delaware",
		"population": "66,924",
		"percentage_tested": "12%",
		"law": "Schools are obligated by statute to require students entering pre-schools, kindergartens and day care centers to show proof of a blood lead test."
  },
	{
		"state": "District of Columbia",
		"population": "48,440",
		"percentage_tested": "25%",
		"law": "District law requires ALL children to be tested twice by two – once between 6-14 months and again between 22 and 26 months. But there are also other specific circumstances that can trigger screening requirements."
  },
	{
		"state": "Florida",
		"population": "1,317,573",
		"percentage_tested": "No available data",
		"law": "All laboratories in Florida must report all blood lead test results by the close of the next business day following laboratory findings."
  },
	{
		"state": "Georgia",
		"population": "801,479",
		"percentage_tested": "15%",
		"law": "The government database consists of  lead screening data for 1998 through 2003 for children less than 16 years of age. A child can only be screened once initially, all other tests are confirmatory tests."
  },
	{
		"state": "Hawaii",
		"population": "108,613",
		"percentage_tested": "No available data",
		"law": "Hawaii’s updated guidelines are based on Medicaid which requires testing of all children with Medicaid coverage."
  },
	{
		"state": "Idaho",
		"population": "138,582",
		"percentage_tested": "No available data",
		"law": "Blood lead tests are available by request for any person residing in Idaho, however the focus of testing are Idaho Medicaid eligible children."
  },
	{
		"state": "Illinois",
		"population": "956,100",
		"percentage_tested": "14%",
		"law": "Health care providers are required to perform an annual testing of children from 6 months of age through 6 years of age DETERMINED to be at high risk for lead exposure."
  },
	{
		"state": "Indiana",
		"population": "508,625",
		"percentage_tested": "8%",
		"law": "Indiana law does not require universal testing of all children under age 7; only children covered by Medicaid are required by federal law."
  },
	{
		"state": "Iowa",
		"population": "237,837",
		"percentage_tested": "No available data",
		"law": "On July 1, 2008, Iowa required all children entering kindergarten to have at least one lead test."
  },
	{
		"state": "Kansas",
		"population": "239,482",
		"percentage_tested": "No available data",
		"law": "Not all families in Kansas are required  to have an in-home investigations to identify lead and other healthy homes hazards in the child’s environment."
  },
	{
		"state": "Kentucky",
		"population": "330,743",
		"percentage_tested": "3%",
		"law": "In Kentucky a child is considered to be lead poisoned at a blood lead level of 20ug/dL or greater, while CDC has determined that a blood lead result of 10ug/dL or greater to be a level of concern."
  },
	{
		"state": "Louisiana",
		"population": "371,818",
		"percentage_tested": "5%",
		"law": "State of Louisiana received $600,750 in 2018 for childhood lead poisoning prevention programmatic activities from the Centers for Disease Control and Prevention."
  },
	{
		"state": "Maine",
		"population": "79,708",
		"percentage_tested": "No available data",
		"law": "Maine and federal laws require tests at 1 and 2 years for children covered by MaineCare."
  },
	{
		"state": "Maryland",
		"population": "442,431",
		"percentage_tested": "27%",
		"law": "A bill passed in Maryland (House Bill 1253) lowered the actionable amount of lead levels in school drinking water from 20 parts per billion to no more than 5 parts per billion."
  },
	{
		"state": "Massachussetts",
		"population": "438,438",
		"percentage_tested": "48%",
		"law": "Every child must have a lead test before they begin daycare, Kindergarten, or preschool."
  },
	{
		"state": "Michigan",
		"population": "695,457",
		"percentage_tested": "21%",
		"law": "Under the new standards, employees cannot return to work in Michigan until their blood lead level is below 15 ug/dL"
  },
	{
		"state": "Minnesota",
		"population": "421,361",
		"percentage_tested": "21%",
		"law": "Lead testing is not universal in Minnesota i.e not all children are tested."
  },
	{
		"state": "Mississippi",
		"population": "233,970",
		"percentage_tested": "15%",
		"law": "Identifies areas where children are at high-risk of lead poisoning and conducts awareness programs"
  },
	{
		"state": "Missouri",
		"population": "451,997",
		"percentage_tested": "21%",
		"law": "Requires every child under 6 years found to be at a high risk of lead poisoning to be tested"
  },
	{
		"state": "Montana",
		"population": "74,000",
		"percentage_tested": "No available data",
		"law": "Has an awareness program for lead poisoning prevention but does not require testing or reporting on blood lead levels in children"
  },
	{
		"state": "Nebraska",
		"population": "157,168",
		"percentage_tested": "No available data",
		"law": "Has a statewide awareness program but does not require testing or reporting on blood lead levels in children"
  },
	{
		"state": "Nevada",
		"population": "218,224",
		"percentage_tested": "No available data",
		"law": "Screens children under the age of 6 for blood lead levels in Clark County alone"
  },
	{
		"state": "New Hampshire",
		"population": "79,493",
		"percentage_tested": "20%",
		"law": "Allows the health department to inspect dwellings for lead-based paint hazards when there is reasonable grounds to do so"
  },
	{
		"state": "New Jersey",
		"population": "638,634",
		"percentage_tested": "27%",
		"law": "Requires all children 6 years and under to be tested for lead poisoning"
  },
	{
		"state": "New Mexico",
		"population": "162,309",
		"percentage_tested": "7%",
		"law": "Requires all children under the gae of 6 enrolled in Medicaid to be tested for blood lead levels"
  },
	{
		"state": "New York State (excluding NYC)",
		"population": "1,400,567",
		"percentage_tested": "15%",
		"law": "Requires screening of children under 6 years of age within three months after enrollment in any pre-school, day care provider or nursery school"
  },
	{
		"state": "New York City",
		"population": "652,912",
		"percentage_tested": "46%",
		"law": "Requires screening of children under 6 years of age within three months after enrollment in any pre-school, day care provider or nursery school"
  },
	{
		"state": "North Carolina",
		"population": "734,828",
		"percentage_tested": "12%",
		"law": "Identifies dwellings with high-risk of lead exposure and requires children who live or frequently visit the units to be tested for blood lead levels"
  },
	{
		"state": "North Dakota",
		"population": "61,031",
		"percentage_tested": "No available data",
		"law": "Has an awareness program for lead poisoning prevention but does not require testing or reporting on blood lead levels in children"
  },
	{
		"state": "Ohio",
		"population": "841,179",
		"percentage_tested": "19%",
		"law": "Requires children under the age of 6 to be tested for blood lead levels if they meet the state's criteria for high-risk of lead poisoning"
  },
	{
		"state": "Oklahoma",
		"population": "319,550",
		"percentage_tested": "14%",
		"law": "All children are required to be tested for lead poisoning first at the age of 1 and again at the age of 2"
  },
	{
		"state": "Oregon",
		"population": "280,492",
		"percentage_tested": "7%",
		"law": "Provides awareness and screening programs for lead poisoning prevention in children under the age of 6"
  },
	{
		"state": "Pennsylvania",
		"population": "863,465",
		"percentage_tested": "No available data",
		"law": "Does not require testing for lead poisoning but mandates laboratories to report results of children tested for blood lead levels"
  },
	{
		"state": "Rhode Island",
		"population": "66,089",
		"percentage_tested": "39%",
		"law": "Requires all physicians to screen children under 6 years at designated intervals"
  },
	{
		"state": "South Carolina",
		"population": "353,117",
		"percentage_tested": "No available data",
		"law": "Does not require testing but recommends that all children under the age of 6 be screened for lead poisoning"
  },
	{
		"state": "South Dakota",
		"population": "72,148",
		"percentage_tested": "No available data",
		"law": "Has an awareness program for lead poisoning prevention but does not require testing or reporting on blood lead levels in children"
  },
	{
		"state": "Tennesse",
		"population": "485,409",
		"percentage_tested": "18%",
		"law": "All TennCare recipients between the ages 1 and 2 are required to be screened for lead poisoning"
  },
	{
		"state": "Texas",
		"population": "2,373,167",
		"percentage_tested": "No available data",
		"law": "Requires all childrenunder the age of 6  enrolled in Medicaid/Texas Health Steps to be tested for lead poisoning and the rest to be assessed for risk"
  },
	{
		"state": "Utah",
		"population": "305,875",
		"percentage_tested": "No available data",
		"law": "All children under 6 years of age living in high-risk areas must be tested for lead poisoning"
  },
	{
		"state": "Vermont",
		"population": "37,040",
		"percentage_tested": "27%",
		"law": "Provides for the inspection and testing of child care facilities for lead-based paint hazards"
  },
	{
		"state": "Virginia",
		"population": "614,931",
		"percentage_tested": "No available data",
		"law": "Requires children under the age of 6 to be tested for blood lead levels if they meet the state's criteria for high-risk of lead poisoning"
  },
	{
		"state": "Washington",
		"population": "536,873",
		"percentage_tested": "6%",
		"law": "Requires children under the age of 2 to be tested for blood lead levels if they meet the state's criteria for high-risk of lead poisoning"
  },
	{
		"state": "West Virginia",
		"population": "122,930",
		"percentage_tested": "14%",
		"law": "Requires all children 6 years and under to be assessed for risk of lead poisoning and tested if found to be at high-risk"
  },
	{
		"state": "Wisconsin",
		"population": "413,384",
		"percentage_tested": "21%",
		"law": "Requires all children 6 years and under to be assessed for risk of lead poisoning and tested if found to be at high-risk"
  },
	{
		"state": "Wyoming",
		"population": "46,017",
		"percentage_tested": "No available data",
		"law": "Has an awareness program for lead poisoning prevention but does not require testing or reporting on blood lead levels in children"
  }
];