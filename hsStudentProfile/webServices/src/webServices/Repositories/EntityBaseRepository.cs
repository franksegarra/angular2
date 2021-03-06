﻿
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Threading.Tasks;
using webServices.Entities;
using webServices.Infrastructure;

namespace webServices.Repositories
{
    public class EntityBaseRepository<T> : IEntityBaseRepository<T>
            where T : class, IEntityBase, new()
    {
        private hsPlayerProfileContext _context;

        #region Properties
        public EntityBaseRepository(hsPlayerProfileContext context)
        {
            _context = context;
        }
        #endregion

        public virtual IEnumerable<T> GetAll()
        {
            return _context.Set<T>().AsEnumerable();
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public T GetSingle(int id)
        {
            return _context.Set<T>().FirstOrDefault(x => x.id == id);
        }

        public async Task<T> GetSingleAsync(int id)
        {
            return await _context.Set<T>().FirstOrDefaultAsync(e => e.id == id);
        }

        public virtual IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate)
        {
            return _context.Set<T>().Where(predicate);
        }

        public virtual async Task<IEnumerable<T>> FindByAsync(Expression<Func<T, bool>> predicate)
        {
            return await _context.Set<T>().Where(predicate).ToListAsync();
        }

        //public virtual void Add(T entity)
        //{
        //    //Operate on a single row post.  Commit immediately
        //    EntityEntry dbEntityEntry = _context.Entry<T>(entity);
        //    _context.Set<T>().Add(entity);
        //    _context.SaveChanges();
        //}

        public virtual async Task AddAsync(T entity)
        {
            //Operate on a single row post.  Commit immediately
            EntityEntry dbEntityEntry = _context.Entry<T>(entity);
            _context.Set<T>().Add(entity);
            await _context.SaveChangesAsync();
        }

        public virtual void Delete(T entity)
        {
            EntityEntry dbEntityEntry = _context.Entry<T>(entity);
            dbEntityEntry.State = EntityState.Deleted;
            _context.SaveChanges();
        }

        public virtual async Task DeleteAsync(T entity)
        {
            EntityEntry dbEntityEntry = _context.Entry<T>(entity);
            dbEntityEntry.State = EntityState.Deleted;
            await _context.SaveChangesAsync();
        }

        public virtual void Edit(T entity)
        {
            T destitem = _context.Set<T>().Where(i => i.id == entity.id).FirstOrDefault();
            Type typeDest = destitem.GetType();

            PropertyInfo[] properties = typeof(T).GetProperties();
            foreach (PropertyInfo property in properties)
            {
                if (property.Name != "id" && property.Name != "created")
                {
                    PropertyInfo targetProperty = typeDest.GetProperty(property.Name);
                    targetProperty.SetValue(destitem, property.GetValue(entity, null), null);
                }
            }

            _context.Entry<T>(destitem).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public virtual async Task EditAsync(T entity)
        {
            T destitem = await _context.Set<T>().Where(i => i.id == entity.id).FirstOrDefaultAsync();
            Type typeDest = destitem.GetType();

            PropertyInfo[] properties = typeof(T).GetProperties();
            foreach (PropertyInfo property in properties)
            {
                if (property.Name != "id" && property.Name != "created")
                {
                    PropertyInfo targetProperty = typeDest.GetProperty(property.Name);
                    targetProperty.SetValue(destitem, property.GetValue(entity, null), null);
                }
            }

            _context.Entry<T>(destitem).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public virtual void Commit()
        {
            _context.SaveChanges();
        }

        //Not using
        //public virtual IEnumerable<T> AllIncluding(params Expression<Func<T, object>>[] includeProperties)
        //{
        //    IQueryable<T> query = _context.Set<T>();
        //    foreach (var includeProperty in includeProperties)
        //    {
        //        query = query.Include(includeProperty);
        //    }
        //    return query.AsEnumerable();
        //}

        //public virtual async Task<IEnumerable<T>> AllIncludingAsync(params Expression<Func<T, object>>[] includeProperties)
        //{
        //    IQueryable<T> query = _context.Set<T>();
        //    foreach (var includeProperty in includeProperties)
        //    {
        //        query = query.Include(includeProperty);
        //    }
        //    return await query.ToListAsync();
        //}


        //public T GetSingle(Expression<Func<T, bool>> predicate)
        //{
        //    return _context.Set<T>().FirstOrDefault(predicate);
        //}

        //public T GetSingle(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includeProperties)
        //{
        //    IQueryable<T> query = _context.Set<T>();
        //    foreach (var includeProperty in includeProperties)
        //    {
        //        query = query.Include(includeProperty);
        //    }

        //    return query.Where(predicate).FirstOrDefault();
        //}
    }
}
