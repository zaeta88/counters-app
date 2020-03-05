import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          menu: { 
            title: 'Counters',
            admin: 'Admin.',
            dashboard: 'Dashboard'
          },
          dashboard: {
            welcome: '¡Welcome to the Counters Administrator app!',
            feelFree: 'Feel free to count as much as you want :)'
          },
          counters: {
            add: 'Add Counter',
            addIconAlt: 'Plus Symbol, Add new counter.',
            table: {
              title: 'Title',
              id: 'ID',
              count: 'Count',
              inc: 'Inc',
              dec: 'Dec',
              delete: 'Delete',
              showing: 'Showing',
              of: 'of',
              to: 'to',
              results: 'Results',
              all: 'All',
              empty: 'Empty Table',
              downIconAlt: 'Down Arrow',
              upIconAlt: 'Up Arrow',
              increaseBtn: 'Increase count',
              likeIconAlt: 'Like Icon, add a like!',
              decreaseBtn: 'Decrease count',
              dislikeIconAlt: 'Dislike Icon, remove a like!',
              deleteBtn: 'Delete Counter',
              trashIconAlt: 'Trash Icon, delete counter!',
              total: 'Counters Total:'
            },
            alert: {
              title: 'Confirm to Delete',
              message: 'Are you sure you want to delete',
              yes: 'Just do it!',
              no: 'No'
            },
            form: {
              title: 'Add Counter',
              success: 'Counter Successfully Saved!',
              titlePh: 'Title',
              titleError: 'Please provide a title.',
              countPh: 'Count Value',
              countError: 'Please provide a valid count.',
              save: 'Save it!'
            },
            filter: {
              iconAlt: 'Filter Icon, Filter counters table.',
              greater: 'Greater Than >',
              less: 'Less Than <'
            }
          },
          footer: {
            powered: 'Powered by',
            cornershop: 'Cornershop',
            iconAlt: 'Cornershop app icon, go there!'
          },
          notFount: {
            iconAlt: 'Clouds icon, error',
            title: "This page doesn't exist.",
            message: 'Verify that you have correctly written the link you want.'
          }
        }
      },
      es: {
        translation: {
          menu: { 
            title: 'Counters',
            admin: 'Admin.',
            dashboard: 'inicio'
          },
          dashboard: {
            welcome: '¡Bienvenido a la Administrator app!',
            feelFree: 'Sietete libre de contar tanto como quieras :)'
          },
          counters: {
            add: 'Agregar Counter',
            addIconAlt: 'Simbolo más, Agregar nuevo counter.',
            table: {
              title: 'Titulo',
              id: 'ID',
              count: 'Contador',
              inc: 'Sum',
              dec: 'Res',
              delete: 'Borrar',
              showing: 'Mostrando',
              of: 'de',
              to: 'hasta',
              results: 'Resultados',
              all: 'Todos',
              empty: 'Tabla Vacia',
              downIconAlt: 'Flecha Abajo',
              upIconAlt: 'Flecha Arriba',
              increaseBtn: 'Suma un contador',
              likeIconAlt: 'Icono me gusta, suma un Me Gusta!',
              decreaseBtn: 'Resta un contador',
              dislikeIconAlt: 'Icono no me gusta, resta un Me Gusta!',
              deleteBtn: 'Eliminar Counter',
              trashIconAlt: 'Icono Basura, Eliminar counter!',
              total: 'Counters Total:'
            },
            alert: {
              title: 'Confirmar Eliminación',
              message: '¿Estás seguro de eliminar a',
              yes: 'Solo Hazlo!',
              no: 'No'
            },
            form: {
              title: 'Agregar Counter',
              success: 'Counter guardado exitosamente!',
              titlePh: 'Titulo',
              titleError: 'Por favor agrega un titulo.',
              countPh: 'Valor de Contador',
              countError: 'POr favor agrega un contador valido.',
              save: 'Guardalo!'
            },
            filter: {
              iconAlt: 'Icono Filtro, Filtrar la tabla de Counters.',
              greater: 'Mayor que >',
              less: 'Menor que <'
            }
          },
          footer: {
            powered: 'Auspiciado por',
            cornershop: 'Cornershop',
            iconAlt: 'Icono del app de Cornershop, visitalos!'
          },
          notFount: {
            iconAlt: 'Icono de Nubes, error',
            title: "Esta página no existe.",
            message: 'Verifica que tienes escrito correctamente el link que quieres.'
          }
        }
      }
    }
  });

export default i18n;