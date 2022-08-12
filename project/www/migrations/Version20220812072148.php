<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220812072148 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mort ADD cat_mort_id INT NOT NULL');
        $this->addSql('ALTER TABLE mort ADD CONSTRAINT FK_E1E2D28E505155C4 FOREIGN KEY (cat_mort_id) REFERENCES cat_mort (id)');
        $this->addSql('CREATE INDEX IDX_E1E2D28E505155C4 ON mort (cat_mort_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mort DROP FOREIGN KEY FK_E1E2D28E505155C4');
        $this->addSql('DROP INDEX IDX_E1E2D28E505155C4 ON mort');
        $this->addSql('ALTER TABLE mort DROP cat_mort_id');
    }
}
