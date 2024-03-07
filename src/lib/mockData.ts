export interface DesignationMockData {
  org: string;
  designation: string;
  yearJoined: string;
  orgProfile: string;
  orgLocation: string;
  employmentType: "Part time" | "Full time" | "Contract";
  employmentLocation?: "Remote" | "Hybrid" | "In office";
}

export const designationMockData: DesignationMockData[] = [
  {
    org: "DuggUp",
    designation: "Co-Founder and CEO",
    yearJoined: "Nov 2023",
    orgProfile: "./hero-icon.png",
    orgLocation: "San Francisco Bay Area",
    employmentType: "Full time",
    employmentLocation: "Remote",
  },
  {
    org: "BetterUp",
    designation: "VP Engineering",
    yearJoined: "Sept 2022",
    orgProfile: "./betterUp.jpeg",
    orgLocation: "San Francisco Bay Area",
    employmentType: "Full time",
  },
];

export interface Post {
  imageURl?: string;
  postHeading: string;
}

export interface PostMockData {
  posts: Post[];
  postDate: string;
}

export const postMockData: PostMockData[] = [
  {
    postDate: "Dec 2023",
    posts: [
      {
        imageURl: "./steve.jpeg",
        postHeading:
          "No amount of technology can convert a bad story into a good story.",
      },
      {
        imageURl: "./sam.jpeg",
        postHeading:
          "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.",
      },
    ],
  },
  {
    postDate: "Dec 2023",
    posts: [
      {
        imageURl: "./image_1.jpeg",
        postHeading:
          'Startup Lesson I am reflecting. Don\'t build for the "average person".',
      },
      {
        imageURl: "./cleanshot.png",
        postHeading: "Your biggest regrets at 80 will be acts of omission.",
      },
    ],
  },
];
