import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App, { About, Home } from '../App';

describe('tela de inicio e links de navegação', () => {
  it('verifica se ao clicar em Home o usuario é direcionado para Home', () => {
    const { history } = renderWithRouter(<App />);
    const HomeLink = screen.getByRole('link', { name: 'Home' });
    expect(HomeLink).toBeInTheDocument();
    userEvent.click(HomeLink);
    const homeTitle = screen.getByRole('heading', { level: 1, name: 'Home' });
    expect(homeTitle).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/');
    const ProjectsLink = screen.getByRole('link', { name: 'Projects' });
    userEvent.click(ProjectsLink);
    expect(homeTitle).not.toBeInTheDocument();
  });
  it('verifica se ao clicar em Projects o usuario é direcionado para Projects', () => {
    const { history } = renderWithRouter(<App />);
    const ProjectsLink = screen.getByRole('link', { name: 'Projects' });
    expect(ProjectsLink).toBeInTheDocument();
    userEvent.click(ProjectsLink);
    const projectsTitle = screen.getByRole('heading', { level: 1, name: 'Projects' });
    expect(projectsTitle).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/projects');
    const HomeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(HomeLink);
    expect(projectsTitle).not.toBeInTheDocument();
  });
  it('verifica se ao clicar em About o usuario é direcionado para About', () => {
    const { history } = renderWithRouter(<App />);
    const AboutLink = screen.getByRole('link', { name: 'About' });
    expect(AboutLink).toBeInTheDocument();
    userEvent.click(AboutLink);
    const aboutTitle = screen.getByRole('heading', { level: 1, name: 'About' });
    expect(aboutTitle).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const HomeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(HomeLink);
    expect(aboutTitle).not.toBeInTheDocument();
  });
  it('verifica se ao clicar em Contact o usuario é direcionado para Contact', () => {
    const { history } = renderWithRouter(<App />);
    const ContactLink = screen.getByRole('link', { name: 'Contact' });
    expect(ContactLink).toBeInTheDocument();
    userEvent.click(ContactLink);
    const contactTitle = screen.getByRole('heading', { level: 1, name: 'Contact' });
    expect(contactTitle).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe('/contact');
    const HomeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(HomeLink);
    expect(contactTitle).not.toBeInTheDocument();
  });
  it('Verifica nome e foto', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const name = screen.getByRole('heading',
      { level: 2, name: 'Thiago Mamede Rodrigues' });
    expect(name).toBeInTheDocument();
    const foto = screen.getAllByRole('img', { alt: 'Foto de Thiago Mamede' });
    expect(foto).toBeInTheDocument();
  });
});
