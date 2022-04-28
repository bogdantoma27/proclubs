import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Liga1 } from '../core/model/liga1.model';
import { AppRepository } from '../core/repository/app.repository';

@Component({
  selector: 'app-table-liga1',
  templateUrl: './table-liga1.component.html',
  styleUrls: ['./table-liga1.component.css']
})
export class TableLiga1Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  tableLiga1;
  dataSource = new MatTableDataSource();
  displayedColumns;
  columns = [
    {
      columnDef: 'rank',
      header: 'Rank',
      cell: (element: Liga1) => `${element.rank}`,
    },
    {
      columnDef: 'team',
      header: 'Name',
      cell: (element: Liga1) => `${element.team}`,
    },
    {
      columnDef: 'played',
      header: 'Played',
      cell: (element: Liga1) => `${element.played}`,
    },
    {
      columnDef: 'win',
      header: 'Win',
      cell: (element: Liga1) => `${element.win}`,
    },
    {
      columnDef: 'draw',
      header: 'Draw',
      cell: (element: Liga1) => `${element.draw}`,
    },
    {
      columnDef: 'lost',
      header: 'Lost',
      cell: (element: Liga1) => `${element.lost}`,
    },
    {
      columnDef: 'for',
      header: 'For',
      cell: (element: Liga1) => `${element.for}`,
    },
    {
      columnDef: 'against',
      header: 'Against',
      cell: (element: Liga1) => `${element.against}`,
    },
    {
      columnDef: 'diff',
      header: 'Diff',
      cell: (element: Liga1) => `${element.diff}`,
    },
    {
      columnDef: 'points',
      header: 'Points',
      cell: (element: Liga1) => `${element.points}`,
    },
  ];

  constructor(private repository: AppRepository) { }

  ngOnInit() {
    this.tableL1();
  }

  tableL1() {
    this.repository.tableLiga1().subscribe(response => {
      this.tableLiga1 = response[0].tables
      this.dataSource = new MatTableDataSource(response[0].tables)
      this.dataSource.data.splice(-1)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.displayedColumns = this.columns.map(c => c.columnDef)
    })
  }
}
