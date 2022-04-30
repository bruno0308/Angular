
# This file is used by the build system to adjust CSS and JS output to support the specified browsers below.
# For additional information regarding the format and rule options, please see:
# https://github.com/browserslist/browserslist#queries

# For the full list of supported browsers by the Angular framework, please see:
# https://angular.io/guide/browser-support

# You can see what browsers were selected by your queries by running:
#   npx browserslist

last 1 Chrome version
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
Firefox ESR
 16  
.editorconfig
@@ -0,0 +1,16 @@
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
 46  
.gitignore
@@ -0,0 +1,46 @@
# See http://help.github.com/ignore-files/ for more about ignoring files.

# compiled output
/dist
/tmp
/out-tsc
# Only exists if Bazel was run
/bazel-out

# dependencies
/node_modules

# profiling files
chrome-profiler-events*.json

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.history/*

# misc
/.angular/cache
/.sass-cache
/connect.lock
/coverage
/libpeerconnection.log
npm-debug.log
yarn-error.log
testem.log
/typings

# System Files
.DS_Store
Thumbs.db
 4  
.vscode/extensions.json
@@ -0,0 +1,4 @@
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=827846
  "recommendations": ["angular.ng-template"]
}
 20  
.vscode/launch.json
@@ -0,0 +1,20 @@
{
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "pwa-chrome",
      "request": "launch",
      "preLaunchTask": "npm: start",
      "url": "http://localhost:4200/"
    },
    {
      "name": "ng test",
      "type": "chrome",
      "request": "launch",
      "preLaunchTask": "npm: test",
      "url": "http://localhost:9876/debug.html"
    }
  ]
}
 42  
.vscode/tasks.json
@@ -0,0 +1,42 @@
{
  // For more information, visit: https://go.microsoft.com/fwlink/?LinkId=733558
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "start",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "(.*?)"
          },
          "endsPattern": {
            "regexp": "bundle generation complete"
          }
        }
      }
    },
    {
      "type": "npm",
      "script": "test",
      "isBackground": true,
      "problemMatcher": {
        "owner": "typescript",
        "pattern": "$tsc",
        "background": {
          "activeOnStart": true,
          "beginsPattern": {
            "regexp": "(.*?)"
          },
          "endsPattern": {
            "regexp": "bundle generation complete"
          }
        }
      }
    }
  ]
}
 27  
README.md
@@ -0,0 +1,27 @@
# LhAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
 109  
angular.json
@@ -0,0 +1,109 @@
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "Bruno Moraes - Senai Atividade 1 Online",
  "projects": {
    "lh-angular": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/lh-angular",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "lh-angular:build:production"
            },
            "development": {
              "browserTarget": "lh-angular:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "lh-angular:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.spec.json",
            "karmaConfig": "karma.conf.js",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          }
        }
      }
    }
  },
  "defaultProject": "lh-angular"
}
 44  
karma.conf.js
@@ -0,0 +1,44 @@
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
//Bruno Moraes - Senai - Atividade 1 Online
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/lh-angular'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
 21,583  
package-lock.json
Large diffs are not rendered by default.

 40  
package.json
@@ -0,0 +1,40 @@
{
  "name": "lh-angular",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~13.1.0",
    "@angular/common": "~13.1.0",
    "@angular/compiler": "~13.1.0",
    "@angular/core": "~13.1.0",
    "@angular/forms": "~13.1.0",
    "@angular/platform-browser": "~13.1.0",
    "@angular/platform-browser-dynamic": "~13.1.0",
    "@angular/router": "~13.1.0",
    "bootstrap": "^5.1.3",
    "rxjs": "~7.4.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~13.1.2",
    "@angular/cli": "~13.1.2",
    "@angular/compiler-cli": "~13.1.0",
    "@types/jasmine": "~3.10.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~3.10.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.1.0",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "~1.7.0",
    "typescript": "~4.5.2"
  }
}
 18  
src/app/app-routing/app-routing.module.ts
@@ -0,0 +1,18 @@
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';

const rotas: Routes = [
  {path: 'mural', component: MuralVagasComponent},
  {path: 'painel', component: PainelVagasComponent},
  {path: '', redirectTo: '/mural', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 0  
src/app/app.component.css
Empty file.
 3  
src/app/app.component.html
@@ -0,0 +1,3 @@
<app-menu></app-menu>
<router-outlet></router-outlet>
<app-rodape></app-rodape> 
 31  
src/app/app.component.spec.ts
@@ -0,0 +1,31 @@
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lh-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lh-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('lh-angular app is running!');
  });
});
 10  
src/app/app.component.ts
@@ -0,0 +1,10 @@
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lh-angular';
}
 32  
src/app/app.module.ts
@@ -0,0 +1,32 @@
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { RouterModule } from '@angular/router';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent,
    PainelVagasComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 0  
src/app/menu/menu.component.css
Empty file.
 13  
src/app/menu/menu.component.html
@@ -0,0 +1,13 @@

<nav class="nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">LH - Vagas</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/mural">Mural de Vagas</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/painel">Cadastro Vagas</a>
    </li>

</nav>
 25  
src/app/menu/menu.component.spec.ts
@@ -0,0 +1,25 @@
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 15  
src/app/menu/menu.component.ts
@@ -0,0 +1,15 @@
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 15  
src/app/models/Vagas.model.ts
@@ -0,0 +1,15 @@
export class Vaga {
    id: number = 0;
    nome: string = "";
    foto: string = "";
    descricao: string = "";
    salario: number = 0;

    constructor(id:number,nome:string,foto: string,descricao: string,salario: number){
        this.id = id;
        this.nome= nome;
        this.foto = foto;
        this.descricao = descricao;
        this.salario = salario;
    }
} 
 9  
src/app/mural-vagas/mural-vagas.component.css
@@ -0,0 +1,9 @@
.lista-vagas{
    display: flex;
    flex-direction: row;
}

.lista-vagas .card{
    margin: 5px 10px;
    min-height: 500px;
} 
 15  
src/app/mural-vagas/mural-vagas.component.html
@@ -0,0 +1,15 @@
<section class="lista-vagas">
    <div *ngFor="let vaga of vagas">

        <div class="card" style="width: 18rem;">
            <img src="assets\img\vagas\{{vaga.foto}}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Código da Vaga: {{vaga.id}}</h5>
                <h5 class="card-title">Vaga: {{vaga.nome}}</h5>
                <p class="card-text">Descricão da Vaga: {{vaga.descricao}}</p>
                <p class="card-text">Salário: R$ {{vaga.salario}},00</p>
            </div>
        </div>

    </div>
</section> 
 25  
src/app/mural-vagas/mural-vagas.component.spec.ts
@@ -0,0 +1,25 @@
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralVagasComponent } from './mural-vagas.component';

describe('MuralVagasComponent', () => {
  let component: MuralVagasComponent;
  let fixture: ComponentFixture<MuralVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuralVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 38  
src/app/mural-vagas/mural-vagas.component.ts
@@ -0,0 +1,38 @@
import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { Vaga } from '../models/Vagas.model';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){
    this._vagasService.getVagas()
      .subscribe(
        retornaVaga => {
          this.vagas = retornaVaga.map(
            item=>{
              return new Vaga(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.salario
              );
            }
          )
        }
      )
  }
}
 0  
src/app/painel-vagas/painel-vagas.component.css
Empty file.
 31  
src/app/painel-vagas/painel-vagas.component.html
@@ -0,0 +1,31 @@
<h2>Cadastrar</h2>
<form>
    <label>Id</label><input type="text" name="id" [(ngModel)] = "vaga.id"><br>
    <label>Nome</label><input type="text" name="nome" [(ngModel)] = "vaga.nome"><br>
    <label>Foto</label><input type="text" name="foto" [(ngModel)] = "vaga.foto"><br>
    <label>Descrição</label><input type="text" name="descricao" [(ngModel)] = "vaga.descricao"><br>
    <label>Salário</label><input type="text" name="salario" [(ngModel)] = "vaga.salario"><br>
    <button type="button" (click)="cadastrar()">Cadastrar Vaga</button>
    <button type="button" (click)="atualizar(vaga.id)">Atualizar Vaga</button>
    <button type="button" (click)="excluir(vaga.id)">Excluir Vaga</button>
</form>


<section class="lista-vagas">
    <div *ngFor="let vaga of vagas">

        <div class="card" style="width: 18rem;">
            <img src="assets\img\vagas\{{vaga.foto}}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Código da Vaga: {{vaga.id}}</h5>
              <h5 class="card-title">Vaga: {{vaga.nome}}</h5>
              <p class="card-text">Descricão da Vaga: {{vaga.descricao}}</p>
              <p class="card-text">Salário: R$ {{vaga.salario}},00</p>

              <button type="button" (click)="atualizar(vaga.id)">Atualizar Vaga</button>
                <button type="button" (click)="excluir(vaga.id)">Excluir Vaga</button>
            </div>
          </div>

    </div>
</section>
 25  
src/app/painel-vagas/painel-vagas.component.spec.ts
@@ -0,0 +1,25 @@
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVagasComponent } from './painel-vagas.component';

describe('PainelVagasComponent', () => {
  let component: PainelVagasComponent;
  let fixture: ComponentFixture<PainelVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 51  
src/app/painel-vagas/painel-vagas.component.ts
@@ -0,0 +1,51 @@
import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);
  public vagas: Vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";

  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";

  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao Excluir")}
    );

    window.location.href = "/mural";

  }


}
 0  
src/app/rodape/rodape.component.css
Empty file.
 1  
src/app/rodape/rodape.component.html
@@ -0,0 +1 @@
<p>Feito por LH</p>
 25  
src/app/rodape/rodape.component.spec.ts
@@ -0,0 +1,25 @@
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeComponent } from './rodape.component';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 15  
src/app/rodape/rodape.component.ts
@@ -0,0 +1,15 @@
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 16  
src/app/vagas.service.spec.ts
@@ -0,0 +1,16 @@
import { TestBed } from '@angular/core/testing';

import { VagasService } from './vagas.service';

describe('VagasService', () => {
  let service: VagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 32  
src/app/vagas.service.ts
@@ -0,0 +1,32 @@
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from './models/Vagas.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vagas";

  constructor(private _httpClient: HttpClient) {  }

  getVagas(): Observable<Vaga[]>{
    return this._httpClient.get<Vaga[]>(this.url);
  }

  cadastrarVaga(vaga: Vaga):Observable<Vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url,vaga);
  }

  atualizarVaga(id:any ,vaga: Vaga):Observable<Vaga[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Vaga[]>(urlAtualizar,vaga);
  }

  removerVaga(id:any):Observable<Vaga[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Vaga[]>(urlDeletar);
  }
}
 0  
src/assets/.gitkeep
Empty file.
 BIN +273 KB 
src/assets/img/vagas/foto1.jpg

 BIN +313 KB 
src/assets/img/vagas/foto2.jpg

 BIN +126 KB 
src/assets/img/vagas/foto3.jpg

 BIN +63.7 KB 
src/assets/img/vagas/foto4.jpg

 3  
src/environments/environment.prod.ts
@@ -0,0 +1,3 @@
export const environment = {
  production: true
};
 16  
src/environments/environment.ts
@@ -0,0 +1,16 @@
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
 BIN +948 Bytes 
src/favicon.ico
Binary file not shown.
 13  
src/index.html
@@ -0,0 +1,13 @@
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>LH - Vagas</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
 12  
src/main.ts
@@ -0,0 +1,12 @@
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 53  
src/polyfills.ts
@@ -0,0 +1,53 @@
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes recent versions of Safari, Chrome (including
 * Opera), Edge on the desktop, and iOS and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */
 1  
src/styles.css
@@ -0,0 +1 @@
/* You can add global styles to this file, and also import other style files */
 26  
src/test.ts
@@ -0,0 +1,26 @@
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
 15  
tsconfig.app.json
@@ -0,0 +1,15 @@
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
 32  
tsconfig.json
@@ -0,0 +1,32 @@
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2017",
    "module": "es2020",
    "lib": [
      "es2020",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
 18  
tsconfig.spec.json
@@ -0,0 +1,18 @@
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine"
    ]
  },
  "files": [
    "src/test.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
 25  
vagas-db.json
@@ -0,0 +1,25 @@
{
  "vagas": [
    {
      "id": 1,
      "nome": "Desenvolver Front End Jr",
      "foto": "foto1.jpg",
      "descricao": "Trabalhar com Angular",
      "salario": 5000
    },
    {
      "id": 2,
      "nome": "Desenvolver BackEnd Pleno",
      "foto": "foto2.jpg",
      "descricao": "Trabalhar com Spring Boot",
      "salario": 10000
    },
    {
      "id": 3,
      "nome": "Desenvolver Fullstack Senior",
      "foto": "foto3.jpg",
      "descricao": "Trabalhar com Angular e Spring",
      "salario": 10000
    }
  ]
} 
0 comments on commit ea697f4
@bruno0308
 
 
