@ -1,32 +0,0 @@
DROP TABLE IF EXISTS edi.card;
DROP TABLE IF EXISTS edi.column;
DROP TABLE IF EXISTS edi.board;

CREATE TABLE edi.board (
    id_board serial PRIMARY KEY,
    name text
);

CREATE TABLE edi.column (
    id_column serial PRIMARY KEY,
    id_board integer REFERENCES edi.board(id_board),
    name text,
    has_estimative boolean
);

CREATE TABLE edi.card (
    id_card serial PRIMARY KEY,
    id_column integer REFERENCES edi.column(id_column),
    title text,
    estimative integer
);

INSERT INTO edi.board (id_board, name) values (1, 'Projeto 1');

INSERT INTO edi.column (id_column, id_board, name, has_estimative) values (1, 1, 'Coluna A', true);
INSERT INTO edi.column (id_column, id_board, name, has_estimative) values (2, 1, 'Coluna B', true);
INSERT INTO edi.column (id_column, id_board, name, has_estimative) values (3, 1, 'Coluna C', true);

INSERT INTO edi.card (id_card, id_column, title, estimative) values (1, 1, 'Atividade 1', 3);
INSERT INTO edi.card (id_card, id_column, title, estimative) values (2, 1, 'Atividade 2', 2);
INSERT INTO edi.card (id_card, id_column, title, estimative) values (3, 1, 'Atividade 3', 1);