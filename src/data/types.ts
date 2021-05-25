interface Phone {
  number: string;
  label: string;
}

interface LinkedIn {
  url: string;
  label: string;
  description: string;
}

interface Skype {
  invite: string;
  label: string;
}

interface Services {
  title: string;
  data: Array<string>;
}

interface Specializations {
  title: string;
  data: Array<string>;
}

interface Item {
  title: string;
  description: string;
}

interface Education {
  title: string;
  data: Array<Item>;
}

interface Experience {
  title: string;
  data: Array<Item>;
}

interface Software {
  title: string;
  data: Array<Item>;
}

interface Membership {
  title: string;
}

export interface Data {
  ProfileImage: string;
  name: string;
  title: string;
  abstract: string;
  mail: Array<string>;
  phone: Phone;
  linkedIn: LinkedIn;
  skype: Skype;
  location: string;
  timezone: string;
  nationality: string;
  services: Services;
  specializations: Specializations;
  education: Education;
  experience: Experience;
  software: Software;
  membership: Membership;
}
