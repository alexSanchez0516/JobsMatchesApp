export interface ItemLink {
  text: string,
  url: string,
}

export interface CategoryResponse {
  data: Category[];
}

export interface Category {
  id:    number;
  value: string;
  order: number;
  key:   string;
}

export interface ProvincesResponse {
  data: Pronvince[];
}

export interface Pronvince {
  id:     number;
  value:  string;
  order:  number;
  key:    string;
  parent: number;
}


export interface OffertsResponse {
  items: Offert[];
  totalPages: number
}


export interface Offert {
  id:                string;
  title:             string;
  province?:          KeyValue;
  city:              string;
  link:              string;
  category?:          KeyValue;
  contractType?:      KeyValue;
  subcategory?:       KeyValue;
  salaryMin?:         KeyValue;
  salaryMax?:         KeyValue;
  salaryPeriod?:      KeyValue;
  experienceMin?:     KeyValue;
  workDay?:           KeyValue;
  study?:             KeyValue;
  teleworking?:      KeyValue;
  published?:         Date;
  updated?:           Date;
  author?:            AuthorOffert;
  requirementMin:    string;
  bold:              boolean;
  applications:      string;
  subSegment:        number;
  executive:         boolean;
  salaryDescription: string;
  multiProvince:     boolean;
  urgent:            boolean;
  color:             boolean;
}

export interface AuthorOffert {
  id:                    string;
  privateId:             number;
  name:                  string;
  uri:                   string;
  corporateResponsive:   boolean;
  showCorporativeHeader: boolean;
  logoUrl?:              string;
}

export interface KeyValue {
  id:    number;
  value: string;
}

export interface filterJob {
  xp: string;
  modality: string;
  offertsQuantity: string;
  filterJornada: string;
}

export interface Dictionary {
  data: KeyValue[]
}

