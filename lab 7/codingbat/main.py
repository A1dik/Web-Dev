import pygame
import os

pygame.init()

# Set up the screen
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Music Player")

# Set up the font
font = pygame.font.SysFont(None, 48)

# Load the music files
MUSIC_FOLDER = "C:/Users/user/Desktop/лф"
music_files = os.listdir(MUSIC_FOLDER)

# Set up the music player
current_track = 0
pygame.mixer.music.load(os.path.join(MUSIC_FOLDER, music_files[current_track]))

# Define the keyboard controls
KEY_PLAY = pygame.K_SPACE
KEY_STOP = pygame.K_ESCAPE
KEY_NEXT = pygame.K_RIGHT
KEY_PREV = pygame.K_LEFT

# Set up the clock
clock = pygame.time.Clock()

# Game loop
running = True
playing = False
while running:

    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == KEY_PLAY:
                if playing:
                    pygame.mixer.music.pause()
                    playing = False
                else:
                    pygame.mixer.music.play()
                    playing = True
            elif event.key == KEY_STOP:
                pygame.mixer.music.stop()
                playing = False
            elif event.key == KEY_NEXT:
                current_track = (current_track + 1) % len(music_files)
                pygame.mixer.music.load(os.path.join(MUSIC_FOLDER, music_files[current_track]))
                pygame.mixer.music.play()
                playing = True
            elif event.key == KEY_PREV:
                current_track = (current_track - 1) % len(music_files)
                pygame.mixer.music.load(os.path.join(MUSIC_FOLDER, music_files[current_track]))
                pygame.mixer.music.play()
                playing = True

    # Draw the screen
    screen.fill((255, 255, 255))
    text = font.render(music_files[current_track], True, (0, 0, 0))
    screen.blit(text, (10, 10))
    pygame.display.flip()

    # Tick the clock
    clock.tick(30)

# Clean up
pygame.quit()
