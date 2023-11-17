# Phonebook App

Phonebook App to aplikacja napisana w technologii React, która umożliwia
użytkownikowi przechowywanie, dodawanie, filtrowanie i usuwanie kontaktów
telefonicznych.

## Funkcje

- **Dodawanie Kontaktów:** Użytkownicy mogą dodawać nowe kontakty, podając imię
  oraz numer telefonu. Program sprawdza, czy kontakt o takim imieniu nie
  istnieje już w książce telefonicznej.

- **Filtrowanie:** Aplikacja umożliwia filtrowanie listy kontaktów na podstawie
  imienia. Wprowadzając tekst w pole wyszukiwania, użytkownicy mogą łatwo
  znaleźć interesujące ich kontakty.

- **Usuwanie Kontaktów:** Każdy kontakt wyświetla przycisk "Delete", który
  umożliwia użytkownikowi usunięcie danego kontaktu z książki telefonicznej.

## Uruchomienie lokalnie

Aby uruchomić tę aplikację lokalnie, wykonaj następujące kroki:

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/tomcek2/goit-react-hw-02-phonebook.git
   ```

2. Zainstaluj zależności:

   ```bash
   npm install
   ```

3. Uruchom aplikację:

   ```bash
   npm start
   ```

## Struktura Katalogów

- src: Zawiera kod źródłowy aplikacji React.
- components: Komponenty aplikacji (Phonebook, ContactInput, ContactList,
  FilterInput).
- App.js: Główny komponent aplikacji.
- index.js: Plik startowy aplikacji.

## Technologie

React Nanoid (do generowania identyfikatorów)
