import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Liga1 } from '../core/model/liga1.model';
import { AppRepository } from '../core/repository/app.repository';

@Component({
  selector: 'app-table-vpg-liga1',
  templateUrl: './table-vpg-liga1.component.html',
  styleUrls: ['./table-vpg-liga1.component.css']
})
export class TableVpgLiga1Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  tableLiga1;
  dataSource = new MatTableDataSource();
  displayedColumns;

  
  columns = [
    {
      columnDef: 'team_name',
      header: 'Name',
      cell: (element: any) => `${element.team_name}`,
    },
    {
      columnDef: 'played',
      header: 'Played',
      cell: (element: any) => `${element.played}`,
    },
    {
      columnDef: 'wins',
      header: 'Wins',
      cell: (element: any) => `${element.wins}`,
    },
    {
      columnDef: 'draws',
      header: 'Draws',
      cell: (element: any) => `${element.draws}`,
    },
    {
      columnDef: 'losses',
      header: 'Losses',
      cell: (element: any) => `${element.losses}`,
    },
    {
      columnDef: 'score_for',
      header: 'For',
      cell: (element: any) => `${element.score_for}`,
    },
    {
      columnDef: 'score_against',
      header: 'Against',
      cell: (element: any) => `${element.score_against}`,
    },
    {
      columnDef: 'points',
      header: 'Points',
      cell: (element: any) => `${element.points}`,
    },
  ];

  constructor(private repository: AppRepository) { }

  ngOnInit() {
    this.tableVpgL1();
  }

  tableVpgL1() {
    this.repository.tableVpgLiga1().subscribe(response => {
      this.tableLiga1 = Array.from(Array(10).keys())
      this.dataSource = new MatTableDataSource(response)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.displayedColumns = this.columns.map(c => c.columnDef)
    })
  }
}
