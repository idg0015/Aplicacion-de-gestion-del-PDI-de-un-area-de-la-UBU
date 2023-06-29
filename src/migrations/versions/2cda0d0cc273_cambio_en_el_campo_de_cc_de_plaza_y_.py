"""Cambio en el campo de cc de Plaza y longitud de observaciones

Revision ID: 2cda0d0cc273
Revises: a5e906956544
Create Date: 2023-06-29 14:04:08.154706

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '2cda0d0cc273'
down_revision = 'a5e906956544'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plaza', schema=None) as batch_op:
        batch_op.add_column(sa.Column('num_concurso_contratacion', sa.String(length=256), nullable=True))
        batch_op.alter_column('observaciones',
               existing_type=mysql.VARCHAR(length=256),
               type_=sa.String(length=512),
               existing_nullable=True)
        batch_op.drop_column('num_concursos_contratacion')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plaza', schema=None) as batch_op:
        batch_op.add_column(sa.Column('num_concursos_contratacion', mysql.INTEGER(display_width=11), autoincrement=False, nullable=True))
        batch_op.alter_column('observaciones',
               existing_type=sa.String(length=512),
               type_=mysql.VARCHAR(length=256),
               existing_nullable=True)
        batch_op.drop_column('num_concurso_contratacion')

    # ### end Alembic commands ###
