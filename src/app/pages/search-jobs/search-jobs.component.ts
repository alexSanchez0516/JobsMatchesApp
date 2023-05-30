import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  CategoryResponse,
  Offert,
  OffertsResponse,
  ProvincesResponse,
  KeyValue,
  filterJob,
  Dictionary,
} from 'src/app/interfaces/generics.Interface';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.scss'],
})
export class SearchJobsComponent implements OnInit, OnDestroy {
  private mainService = inject(MainService);

  public categorysResp: CategoryResponse = {
    data: [],
  };

  public provincesResponse: ProvincesResponse = {
    data: [],
  };

  public offertsResponse: OffertsResponse = {
    items: [],
    totalPages: 1,
  };

  public offertsResponseTmp: OffertsResponse = {
    items: [],
    totalPages: 1,
  };

  public StudyMinInfoJobsKeyValueData: Dictionary = {
    data: [],
  };

  public salaryInfoJobsKeyValueData: Dictionary = {
    data: [],
  };

  public teleworkingInfoJobsKeyValueData: Dictionary = {
    data: [],
  };

  public experienceInfoJobsKeyValueData: Dictionary = {
    data: [],
  };

   public typeJornadaInfoJobsKeyValueData: Dictionary = {
    data: [],
  };

  private dictionarys: string[] = [
    'teleworking',
    'salary-range',
    'study',
    'candidate-experience',
    'workday',
  ];

  public sumOffertsNotSalary: number = 0;
  public sumOffertsSalary: number = 0;
  public sumOffertsType: number = 0;
  public sumOffertsLenguajes: number = 0;
  public followPage = 1;
  private params = '';
  public pages: number[] = [];

  public offert: Offert = {
    id: '',
    title: '',
    province: undefined,
    city: '',
    link: '',
    category: undefined,
    contractType: undefined,
    subcategory: undefined,
    salaryMin: undefined,
    salaryMax: undefined,
    salaryPeriod: undefined,
    experienceMin: undefined,
    workDay: undefined,
    study: undefined,
    published: undefined,
    updated: undefined,
    author: undefined,
    requirementMin: '',
    bold: false,
    applications: '',
    subSegment: 0,
    executive: false,
    salaryDescription: '',
    multiProvince: false,
    urgent: false,
    color: false,
  };

  public offertFirt: Offert = {
    id: '',
    title: '',
    province: undefined,
    city: '',
    link: '',
    category: undefined,
    contractType: undefined,
    subcategory: undefined,
    salaryMin: undefined,
    salaryMax: undefined,
    salaryPeriod: undefined,
    experienceMin: undefined,
    workDay: undefined,
    study: undefined,
    published: undefined,
    updated: undefined,
    author: undefined,
    requirementMin: '',
    bold: false,
    applications: '',
    subSegment: 0,
    executive: false,
    salaryDescription: '',
    multiProvince: false,
    urgent: false,
    color: false,
  };

  public filterJobFilters: filterJob = {
    xp: '',
    modality: '',
    offertsQuantity: '',
    filterJornada: ''
  };

  private fb = inject(FormBuilder);

  formControl = this.fb.group({
    keyword: ['', [], , []],
    province: ['', [], , []],
    category: ['', [], , []],
  });

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.search();

    this.mainService.getCategorys().subscribe({
      next: (response) => {
        this.categorysResp = response;
      },
    });

    this.mainService.getProvinces().subscribe({
      next: (response) => {
        this.provincesResponse = response;
      },
    });

    this.loadDictionarys();
  }

  loadDictionarys() {
    this.dictionarys.forEach((dictionary) => {
      this.mainService.getAnyDictionary(dictionary).subscribe({
        next: (response) => {
          switch (dictionary) {
            case 'teleworking':
              this.teleworkingInfoJobsKeyValueData = response;
              break;
            case 'salary-range':
              this.salaryInfoJobsKeyValueData      = response;
              break;
            case 'candidate-experience':
              this.experienceInfoJobsKeyValueData  = response;
              break;
            case 'study':
              this.StudyMinInfoJobsKeyValueData    = response;
              break;
            case 'workday':
              this.typeJornadaInfoJobsKeyValueData = response
              break;
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }

  calcFollowPage(pageNum: number): void {
    this.followPage = pageNum;
    this.search(pageNum);
  }

  searchJob(idJob: string) {
    this.offert = this.offertsResponse.items.find(
      (offer) => offer.id === idJob
    )!;
  }

  search(page?: number) {
    if (page == undefined) {
      this.followPage = 1;
    }
    let oneParameter = true;
    this.params = '';
    if (this.formControl.value.keyword != '') {
      if (oneParameter) {
        this.params += '?q=' + this.formControl.value.keyword;
      } else {
        this.params += '&q=' + this.formControl.value.keyword;
      }
      oneParameter = false;
    }

    if (this.formControl.value.category != '') {
      if (oneParameter) {
        this.params += '?category=' + this.formControl.value.category;
      } else {
        this.params += '&category=' + this.formControl.value.category;
      }
      oneParameter = false;
    }

    if (this.formControl.value.province != '') {
      if (oneParameter) {
        this.params += '?province=' + this.formControl.value.province;
      } else {
        this.params += '&province=' + this.formControl.value.province;
      }
      oneParameter = false;
    }

    if (oneParameter) {
      this.params += '?page=' + this.followPage;
    } else {
      this.params += '&page=' + this.followPage;
    }
    oneParameter = false;

    this.sendSeachJobs();
  }

  filterBySalary(salary: any): void {
    this.filterJobFilters.offertsQuantity = salary.target.value;
  }

  filterByXP(xp: any): void {
    this.filterJobFilters.xp = xp.target.value;
  }

  filterByTipoJornada(type: any): void {
    this.filterJobFilters.filterJornada = type.target.value;
  }

  filterByModalidad(type: any): void {
      this.filterJobFilters.modality = type.target.value;
  }

  filterResults() {
    console.log('filterResults', this.filterJobFilters);
    this.offertsResponseTmp = { ...this.offertsResponse };
    Object.entries(this.filterJobFilters).forEach(([key, value]) => {
      this.offertsResponse.items = this.offertsResponse.items.filter((item) => {

        if (value != undefined && value != null && value != '') {
          console.log(`key: ${key}, value: ${value}`);
          switch (key) {
            case 'xp':
              return item.experienceMin != undefined &&
              item.experienceMin?.id == value;
            case 'modality':
                return item.teleworking != undefined &&
                item.teleworking?.id == value;
            case 'offertsQuantity':
              return item.salaryPeriod != undefined &&
              item.salaryMin?.id == value;
            case 'filterJornada':
              return item.workDay != undefined &&
              item.workDay?.id == value;
          }
        }
        return item;

      });
    });
  }

  clearFilters() {
    const formSelects = document.querySelectorAll('.form-select');
    console.log('clearFilters', formSelects);

    this.offertsResponse = { ...this.offertsResponseTmp };
  }

  sendSeachJobs() {
    this.mainService.getOfferts(this.params).subscribe({
      next: (response: OffertsResponse) => {
        this.offertsResponse = response;
        this.offertFirt = response.items.find((e) => !!e)!;
        let count = 0;
        this.pages = [];
        for (
          let i = this.followPage;
          i < this.offertsResponse.totalPages;
          i++
        ) {
          if (count < 10) {
            this.pages.push(i);
          }
          count++;
        }
      },
    });
  }
}
